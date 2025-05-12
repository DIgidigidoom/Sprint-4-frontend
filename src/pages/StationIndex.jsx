import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadStations, addStation, updateStation, removeStation } from '../store/actions/station.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { userService } from '../services/user/user.service.local.js'
import { StationList } from '../cmps/StationList.jsx'
import { StationFilter } from '../cmps/StationFilter.jsx'
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
            console.error('Cannot create station', err)
            showErrorMsg('Cannot create station')
        }
    }


    return (
        <main className="station-index">
            <header>
                <h2>Stations</h2>
                <button className="btn-create" onClick={onCreateStation}>
                    <i className="fa-solid fa-plus"></i> Create Playlist
                </button>

            </header>
            <StationFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <StationList
                stations={stations}
                onRemoveStation={onRemoveStation}
                onUpdateStation={onUpdateStation} />

            {stationToEdit && (
                <EditStationModal
                    station={stationToEdit}
                    onClose={() => setStationToEdit(null)}
                />
            )}

        </main>
    )
}