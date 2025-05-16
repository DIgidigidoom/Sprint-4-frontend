import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadStations, loadStation, addStation, removeStation } from '../store/actions/station.actions.js'
import { useNavigate } from 'react-router-dom'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { SideBar } from '../cmps/SideBar.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx'
import MainPage from './MainPage.jsx'
import { EditStationModal } from '../cmps/EditStationModal.jsx'
import { MediaPlayer } from '../cmps/MediaPlayer.jsx'
import { SET_SEARCH_TEXT } from '../store/reducers/youtube.reducer.js'


export function StationIndex() {

    const stations = useSelector(storeState => storeState.stationModule.stations)

    const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter())
    const [stationToEdit, setStationToEdit] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        loadStations(filterBy)
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
        const station = stationService.getEmptyStation()

        try {
            const savedStation = await addStation(station)
            console.log('Saved station:', savedStation)
            console.log('🆕 Saved station ID:', savedStation._id)

            await loadStation(savedStation._id)
            showSuccessMsg('Station created')
        } catch (err) {
            showErrorMsg('Cannot create station')
            console.error(err)
        }
    }

    return (
        <main className="station-index">
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
                onSelectStation={onSelectStation} />

            <MediaPlayer />

            {stationToEdit && (
                <EditStationModal
                    station={stationToEdit}
                    onClose={() => setStationToEdit(null)} />
            )}

        </main>
    )
}



