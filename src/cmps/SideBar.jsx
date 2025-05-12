import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function SideBar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                
                    <span>Your Library</span>
                
                <button className='sidebar-create-btn'> <FontAwesomeIcon icon={faPlus} className='sidebar-plus' />Create</button>
            </div>

        </div>
    )
}
