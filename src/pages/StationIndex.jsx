import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadStations, addStation, updateStation, removeStation } from '../store/actions/station.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { userService } from '../services/user/user.service.local.js'
import { StationList } from '../cmps/StationList.jsx'
import { StationFilter } from '../cmps/StationFilter.jsx'

export function StationIndex() {

    const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter())
    const stations = useSelector(storeState => storeState.stationModule.stations)
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

    async function onUpdateStation(station) {
        station.title = prompt('Title?', 'Some Title')
        const stationToSave = { ...station, name }
        try {
            const savedStation = await updateStation(stationToSave)
            showSuccessMsg(`Station updated, new name: ${savedStation.name}`)
        } catch (err) {
            showErrorMsg('Cannot update station')
        }
    }

    async function onCreateStation() {
        const station = stationService.getEmptyStation()
        try {
            const savedStation = await stationService.save(station)
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
        </main>
    )
}