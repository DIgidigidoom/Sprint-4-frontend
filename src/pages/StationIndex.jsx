import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStations, loadStation, addStation, updateStation, removeStation } from '../store/actions/station.actions.js'
import { useNavigate } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { SideBar } from '../cmps/SideBar.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx'
import MainPage from './MainPage.jsx'
import { EditStationModal } from '../cmps/EditStationModal.jsx'
import { MediaPlayer } from '../cmps/MediaPlayer.jsx'

export function StationIndex() {

    const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter())

    const stations = useSelector(storeState => storeState.stationModule.stations)
    const [stationToEdit, setStationToEdit] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        loadStations(filterBy)
    }, [filterBy])

    async function onRemoveStation(stationId) {
        try {
            await removeStation(stationId)
            showSuccessMsg('Station removed')

        } catch (err) {
            showErrorMsg('Cannot remove station')
        }
    }

    function onSelectStation(stationId) {
        loadStation(stationId)
    }

    function onUpdateStation(station) {
        setStationToEdit(station)
    }

    async function onCreateStation() {
        const station = stationService.getEmptyStation()
        // station.createdBy.fullname = 'Tom Shahar'
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
            {/* <StationFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
            {/* <StationList
                stations={stations}
                onRemoveStation={onRemoveStation}
                onUpdateStation={onUpdateStation} /> */}
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



