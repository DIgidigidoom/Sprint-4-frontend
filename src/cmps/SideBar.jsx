import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { addStation } from '../store/actions/station.actions.js'
import { useNavigate } from 'react-router-dom'

export function SideBar() {

    const navigate = useNavigate()

    async function onCreateStation() {
        const station = stationService.getEmptyStation()
        try {
            const savedStation = await addStation(station)
            navigate(`/station/${savedStation._id}`)
        } catch (err) {
            showErrorMsg('Cannot add station')
            console.log("err: ", err)
        }
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-header'>

                <span>Your Library</span>

                <button onClick={() => onCreateStation()} className='sidebar-create-btn'> <FontAwesomeIcon icon={faPlus} className='sidebar-plus' />Create</button>
            </div>

        </div>
    )
}
