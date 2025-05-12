import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadStations, addStation, updateStation, removeStation } from '../store/actions/station.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { userService } from '../services/user/user.service.local.js'
import { StationList } from '../cmps/StationList.jsx'
import { StationFilter } from '../cmps/StationFilter.jsx'
import { SideBar } from '../cmps/SideBar.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx'
import MainPage from './MainPage.jsx'

export function StationIndex() {

    const [filterBy, setFilterBy] = useState(stationService.getDefaultFilter())
    const stations = useSelector(storeState => storeState.stationModule.stations)

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

    async function onAddStation() {
        const station = stationService.getEmptyStation()
        station.name = prompt('Name?', 'Some name')
        try {
            const savedStation = await addStation(station)
            showSuccessMsg(`Station added (id: ${savedStation._id})`)
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
                onUpdateStation={onUpdateStation} />
            <SideBar />

        </main>
    )
}