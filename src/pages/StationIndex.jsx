import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStations, addStation, updateStation, removeStation } from '../store/actions/station.actions.js'
import { useNavigate } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { SideBar } from '../cmps/SideBar.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx'
import MainPage from './MainPage.jsx'
import { EditStationModal } from '../cmps/EditStationModal.jsx'

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

    function onUpdateStation(station) {
        setStationToEdit(station)
    }

    async function onCreateStation() {
        const station = stationService.getEmptyStation()
        try {
            const savedStation = await addStation(station)
            navigate(`/station/${savedStation._id}`)
        } catch (err) {
            showErrorMsg('Cannot add station')
        }
    }

    async function onUpdateStation(station) {
        station.title = prompt('Title?', 'Some Title')
        const stationToSave = { ...station, name }
        try {
            const savedStation = await updateStation(stationToSave)
            showSuccessMsg(`Station updated, new name: ${savedStation.name}`)
        } catch (err) {
            showErrorMsg('Cannot update station')
        }
        console.error('Cannot create station', err)
        showErrorMsg('Cannot create station')
    }

    return (
        <main className="station-index">
            <AppHeader />
            {/* <StationFilter filterBy={filterBy} setFilterBy={setFilterBy} /> */}
            {/* <StationList
                stations={stations}
                onRemoveStation={onRemoveStation}
                onUpdateStation={onUpdateStation} /> */}
            <MainPage stations={stations}
                onRemoveStation={onRemoveStation}
                onUpdateStation={onUpdateStation} />

            <SideBar />

            {stationToEdit && (
                <EditStationModal
                    station={stationToEdit}
                    onClose={() => setStationToEdit(null)} />
            )}

        </main>
    )
}



