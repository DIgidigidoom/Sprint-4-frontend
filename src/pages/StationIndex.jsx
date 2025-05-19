import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadStations, loadStation, addStation, removeStation } from '../store/actions/station.actions.js'
import { useNavigate } from 'react-router-dom'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station'
import { SideBar } from '../cmps/SideBar.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx'
import MainPage from './MainPage.jsx'
import { EditStationModal } from '../cmps/EditStationModal.jsx'
import { MediaPlayer } from '../cmps/MediaPlayer.jsx'
import { SET_SEARCH_TEXT } from '../store/reducers/youtube.reducer.js'
import { SET_STATIONS } from '../store/reducers/station.reducer.js'
import { userService } from '../services/user/index.js'


export function StationIndex() {

    const stations = useSelector(storeState => storeState.stationModule.stations)

    const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter())
    const [stationToEdit, setStationToEdit] = useState(null)
    const [isCollapsed, setIsCollapsed] = useState(false)



    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        stationService.query(filterBy)
            .then(stations => dispatch({ type: SET_STATIONS, stations }))
            .catch(err => {
                console.error('Failed to load stations', err)
                showErrorMsg('Could not load stations')
            })
    }, [filterBy])

    async function onRemoveStation(stationId) {
        try {
            await removeStation(stationId)
            navigate('/')
            showSuccessMsg('Station removed')

        } catch (err) {
            showErrorMsg('Cannot remove station')
        }
    }

    function onSelectStation(stationId) {
        loadStation(stationId)
        dispatch({ type: SET_SEARCH_TEXT, text: '' })
        navigate(`/station/${stationId}`, { replace: false })
    }

    function onUpdateStation(station) {
        setStationToEdit(station)
    }

    async function onCreateStation() {
        const loggedInUser = userService.getLoggedinUser()

        // Optional: Get the user's current playlist count to generate a name
        const allStations = await stationService.query()
        const userPlaylists = allStations.filter(station =>
            station.createdBy._id === loggedInUser._id
        )
        const playlistNumber = userPlaylists.length

        const newStation = {
            type: 'user playlist',
            name: `My Playlist #${playlistNumber}`,
            createdBy: {
                _id: loggedInUser._id,
                fullname: loggedInUser.fullname,
                imgUrl: 'defaultstation_ov5qip',
            },
            songs: [],
            createdAt: Date.now(),
        }

        try {
            const savedStation = await addStation(newStation)
            showSuccessMsg('Station created')

            // Refresh the list to include the new one
            const updatedStations = await stationService.query()
            dispatch({ type: 'SET_STATIONS', stations: updatedStations })
        } catch (err) {
            showErrorMsg('Cannot create station')
            console.error(err)
        }
    }

    return (
        <main className={`station-index ${isCollapsed ? 'collapsed' : ''}`}>
            <AppHeader />

            <MainPage
                stations={stations}
                onRemoveStation={onRemoveStation}
                onUpdateStation={onUpdateStation}
                onSelectStation={onSelectStation}
            />

            <SideBar
                onCreateStation={onCreateStation}
                stations={stations}
                onSelectStation={onSelectStation}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed} />

            <MediaPlayer />

            {stationToEdit && (
                <EditStationModal
                    station={stationToEdit}
                    onClose={() => setStationToEdit(null)} />
            )}

        </main>
    )
}



