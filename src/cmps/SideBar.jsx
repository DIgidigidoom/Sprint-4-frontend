import React, { useEffect, useState, useRef } from 'react'
import MagnifyingGlassIcon from '../assets/icons/magnifying-glass.svg?react'
import Plus from '../assets/icons/plus.svg?react'
import HoverPlayBtn from '../assets/icons/hover-play-btn.svg?react'
import SidebarInputX from '../assets/icons/sidebar-input-x.svg?react'
import { userService } from '../services/user'
import { showErrorMsg } from '../services/event-bus.service'
import LikedSongsStationPic from "../assets/imgs/liked-songs-station-pic.png"
import LikedSongsPin from "../assets/icons/liked-songs-pin.svg?react"
import { useSelector } from 'react-redux'
import DefaultPic from '../assets/imgs/defaultstation.jpeg'
import { getCloudinaryImg } from '../services/util.service'




export function SideBar({ onCreateStation, onSelectStation }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [userStations, setUserStations] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    // const [likedStation, setLikedStation] = useState('')
    const user = userService.getLoggedinUser()
    const station = useSelector(storeState => storeState.stationModule.station)
    const stations = useSelector(storeState => storeState.stationModule.stations)
    // const station = useSelector(storeState => storeState.stationModule.station)
    // const {createdBy} = station
    // const {createdBy} = station

    const likedStation = stations.find(station => station.createdBy._id === user?._id && station.type === 'liked station')
    

    useEffect(() => {
        const filteredStations = stations.filter(station => (station.createdBy._id === user?._id && station.type !== 'liked station'))
        setUserStations(filteredStations)
    }, [stations, likedStation])


   



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
                    onClick={() => {
                        if (!user) {
                            showErrorMsg('Log in first!')
                            return
                        }
                        onCreateStation()
                    }}
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

            {likedStation && likedStation?.songs?.length > 0 && (
                <div key={likedStation._id} className='sidebar-followed-content' onClick={() => onSelectStation(likedStation._id)}>
                    <div className='sidebar-content-preview'>
                        <img src={getCloudinaryImg(likedStation.createdBy.imgUrl)} alt="" />
                        <HoverPlayBtn className="hover-play-btn" />
                        <div className='sidebar-content-info'>
                            <span className='sidebar-content-info-title'>{likedStation.name}</span>
                            <span className='sidebar-content-info-description sidebar-content-info-description-liked-songs'><span className="liked-songs-pin"><LikedSongsPin className="liked-songs-pin-svg" /></span>Playlist • {likedStation.songs.length} {likedStation.songs.length === 1 ? 'song' : 'songs'}</span>
                        </div>
                    </div>
                </div>
            )}

            {userStations.map(station => {
                return (
                    <div key={station._id} className='sidebar-followed-content' onClick={() => onSelectStation(station._id)}>
                        <div className='sidebar-content-preview'>
                            <img src={getCloudinaryImg(station.createdBy.imgUrl)} />
                            <HoverPlayBtn className="hover-play-btn" />
                            <div className='sidebar-content-info'>
                                <span className='sidebar-content-info-title'>{station.name}</span>
                                <span className='sidebar-content-info-description'>Playlist • {station.createdBy.fullname}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
