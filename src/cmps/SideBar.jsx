import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { addStation } from '../store/actions/station.actions.js'


export function SideBar({ onCreateStation }) {


    return (
        <div className='sidebar'>
            <div className='sidebar-header'>

                <span>Your Library</span>

                <button
                    onClick={onCreateStation}
                    className='sidebar-create-btn'>
                    <FontAwesomeIcon icon={faPlus} className='sidebar-plus' 
                    />
                    Create
                </button>
            </div>

        </div>
    )
}
