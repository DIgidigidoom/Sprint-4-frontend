import React, { useEffect, useState, useRef } from 'react'
import MagnifyingGlassIcon from '../assets/icons/magnifying-glass.svg?react'
import Plus from '../assets/icons/plus.svg?react'
import HoverPlayBtn from '../assets/icons/hover-play-btn.svg?react'
import SidebarInputX from '../assets/icons/sidebar-input-x.svg?react'






export function SideBar({ onCreateStation, stations, onSelectStation }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [userStations, setUserStations] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [likedStation, setLikedStation] = useState('')




    useEffect(() => {
        const filteredStations = stations.filter(station => station.owner && !station.isLikedSongs)
        setUserStations(filteredStations)
    }, [stations])

    useEffect(() => {
        const likedStationExists = stations.find(station => station.isLikedSongs)
        setLikedStation(likedStationExists)
    }, [stations])


    const searchRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target) &&
                searchTerm.trim() === ''
            ) {
                setIsSearchOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [searchTerm])

    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <span>Your Library</span>


                <button
                    onClick={onCreateStation}
                    className='sidebar-create-btn'>
                    <span><Plus /></span>
                    Create
                </button>
            </div>
            <div className='sidebar-sort-btns'>
                <button className='sidebar-playlist-btn sidebar-sort-btn'>Playlists</button>
                <button className='sidebar-artists-btn sidebar-sort-btn'>Artists</button>
            </div>


            <div className='sidebar-filter' ref={searchRef}>
                <div className='sidebar-filter-btn' onClick={() => setIsSearchOpen(prev => !prev)} >
                    <span><MagnifyingGlassIcon /></span>
                </div>
                <input
                    type='text'
                    placeholder='Search in Your Library'
                    value={searchTerm}
                    onChange={ev => setSearchTerm(ev.target.value)}
                    className={`sidebar-search-input ${isSearchOpen ? 'open' : ''}`}
                />
                {searchTerm && (
                    <button
                        className='sidebar-clear-btn'
                        onClick={() => setSearchTerm('')}
                        aria-label='Clear search'
                    >
                        <SidebarInputX className="sidebar-clear-btn-svg" />
                    </button>
                )}
            </div>
            {likedStation && (
                <div key={likedStation._id} className='sidebar-followed-content' onClick={() => onSelectStation(likedStation._id)}>
                    <div className='sidebar-content-preview'>
                        <img src="https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg" alt="" />
                        <HoverPlayBtn />
                        <div className='sidebar-content-info'>
                            <span className='sidebar-content-info-title'>{likedStation.name}</span>
                            <span className='sidebar-content-info-description'>Playlist • {likedStation.songs.length}</span>
                        </div>
                    </div>
                </div>
            )}

            {userStations.map(station => {
                return (
                    <div key={station._id} className='sidebar-followed-content' onClick={() => onSelectStation(station._id)}>
                        <div className='sidebar-content-preview'>
                            <img src="https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg" alt="" />
                            <HoverPlayBtn />
                            <div className='sidebar-content-info'>
                                <span className='sidebar-content-info-title'>{station.name}</span>
                                <span className='sidebar-content-info-description'>Playlist • {station.owner.fullname}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>

    )
}
