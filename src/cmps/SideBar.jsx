import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stationService } from '../services/station/index.js'
import { addStation } from '../store/actions/station.actions.js'


export function SideBar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    

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
export function SideBar({ onCreateStation }) {


    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <span>Your Library</span>
                <button onClick={() => onCreateStation()} className='sidebar-create-btn'> <FontAwesomeIcon icon={faPlus} className='sidebar-plus' />Create</button>

                <button
                    onClick={onCreateStation}
                    className='sidebar-create-btn'>
                    <FontAwesomeIcon icon={faPlus} className='sidebar-plus' 
                    />
                    Create
                </button>
            </div>
            <div className='sidebar-sort-btns'>
                <button className='sidebar-playlist-btn sidebar-sort-btn'>Playlists</button>
                <button className='sidebar-artists-btn sidebar-sort-btn'>Artists</button>
            </div>


            <div className='sidebar-filter'>
                <div className='sidebar-filter-btn' onClick={() => setIsSearchOpen(prev => !prev)} >
                    <i class="fa-solid fa-magnifying-glass"></i>
                    
                </div>
                <input
                        type='text'
                        placeholder='Search in Your Library'
                        value={searchTerm}
                        onChange={ev => setSearchTerm(ev.target.value)}
                        className={`sidebar-search-input ${isSearchOpen ? 'open' : ''}`}
                    />
            </div>

            <div className='sidebar-followed-content'>
                <div className='sidebar-content-preview'>
                    <img src="https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg" alt="" />
                    <div className='sidebar-content-info'>
                        <span className='sidebar-content-info-title'>content name</span>
                        <span className='sidebar-content-info-description'>type of content</span>
                    </div>
                </div>
                <div className='sidebar-content-preview'>
                    <img src="https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg" alt="" />
                    <div className='sidebar-content-info'>
                        <span className='sidebar-content-info-title'>content name</span>
                        <span className='sidebar-content-info-description'>type of content</span>
                    </div>
                </div>
                <div className='sidebar-content-preview'>
                    <img src="https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg" alt="" />
                    <div className='sidebar-content-info'>
                        <span className='sidebar-content-info-title'>content name</span>
                        <span className='sidebar-content-info-description'>type of content</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
