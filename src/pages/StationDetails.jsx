import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadStation, updateStation, setIsPlaying, addSong, removeSong } from '../store/actions/station.actions'

import {  useDebouncedYouTubeSearchInsidePlaylist } from '../customHooks/useDebouncedYouTubeSearch'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useParams } from 'react-router-dom'
import { EditStationModal } from '../cmps/EditStationModal'
import { ColorThief } from '../cmps/ColorThief'
import { formatTime, formatSpotifyDate, getCloudinaryImg, calcStationDuration } from '../services/util.service'
import { SET_STATION, SET_CURRENT_PLAYLIST, SET_CURRENT_SONG, SET_IS_PLAYING } from '../store/reducers/station.reducer'
import { toggleLike } from '../store/actions/user.actions'
import AddLikedBtn from '../assets/icons/add-liked-btn.svg?react'
import LikedSongCheckmark from '../assets/icons/liked-song-checkmark.svg?react'
import HoverPlayBtn from '../assets/icons/hover-play-btn.svg?react'
import HoverPauseBtn from '../assets/icons/pause-btn-media-player.svg?react'
import OptionsBtn from '../assets/icons/options-btn.svg?react'
import ClockIcon from '../assets/icons/clock-icon.svg?react'
import MagnifyingGlassIcon from '../assets/icons/magnifying-glass.svg?react'
import CloseSearchIcon from '../assets/icons/sidebar-input-x.svg?react'


export function StationDetails({ onRemoveStation }) {
  const station = useSelector(storeState => storeState.stationModule.station)
  const stations = useSelector(storeState => storeState.stationModule.stations)
  const loggedInUser = useSelector(storeState => storeState.userModule.user)
  const songIdx = useSelector(storeState => storeState.stationModule.currentSongIdx)
  const currentSong = useSelector(storeState => storeState.stationModule.currentSong)
  const isPlaying = useSelector(storeState => storeState.stationModule.isPlaying)
  const [SongContextMenu, setSongContextMenu] = useState({ visible: false, x: 0, y: 0, song: null })
  const [stationContextMenu, setStationContextMenu] = useState({ visible: false, x: 0, y: 0 })
  // const youtubeResults = useSelector(storeState => storeState.youtubeModule.youtubeResults)



  const [name, setName] = useState('')
  const [songs, setSongs] = useState(station.songs)
  const [stationDuration, setStationDuration] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [dominantColor, setDominantColor] = useState(null)
  const [searchTxt, setSearchTxt] = useState('')
  const [stationSearchResults, setStationSearchResults] = useState([])
  const playerRef = useRef(null)
  const [isDisplayingSearch, setIsDisplayingSearch] = useState(false)
  const [userMsg, setUserMsg] = useState({
    visible: false,
    message: '',
    image: null,
  })


  const { stationId } = useParams()
  const dispatch = useDispatch()
  const colorThief = useRef()
  const debouncedSearch = useDebouncedYouTubeSearchInsidePlaylist()


  useEffect(() => {

    if (stationId) {
      loadStation(stationId)
    }
  }, [stationId])

  useEffect(() => {
    const handleClickOutside = () => {
      if (SongContextMenu.visible) setSongContextMenu({ visible: false, x: 0, y: 0, song: null })
      if (stationContextMenu.visible) setStationContextMenu({ visible: false, x: 0, y: 0 })
    }

    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [SongContextMenu.visible, stationContextMenu.visible])


  useEffect(() => {
    if (station) {
      setName(station.name)
      const stationSongs = station.songs || []
      setSongs(stationSongs)
      dispatch(setIsPlaying(false))
      setStationDuration(calcStationDuration(stationSongs, 'duration' ))
      setIsDisplayingSearch(stationSongs.length === 0)

    }
  }, [station])

  useEffect(() => {
    if (!searchTxt) {
      setStationSearchResults([])
      return
    }

    debouncedSearch(searchTxt, (results) => {
      setStationSearchResults(results)
    })

    return () => debouncedSearch.cancel()
  }, [searchTxt])

  async function onSaveName() {
    try {
      const updatedStation = { ...station, name }
      await updateStation(updatedStation)
      showSuccessMsg('Station name updated')
    } catch (err) {
      console.error('Failed to update station name', err)
      showErrorMsg('Failed to save station')
    }
  }

  async function onToggleLike(song, loggedInUser, station, stations) {
    try {
      const updatedUser = await toggleLike(song, loggedInUser, station, stations)
      const isNowLiked = updatedUser.likedSongsIds.includes(song.id)
      const likedStation = stations.find(station => station.type === 'liked station' && station.createdBy._id === updatedUser._id)

      setUserMsg({
        visible: true,
        message: isNowLiked ? 'Added to Liked Songs.' : 'Removed from Liked Songs.',
        image: getCloudinaryImg(likedStation.createdBy.imgUrl), // or whatever image you want to show
      })

      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        setUserMsg(prev => ({ ...prev, visible: false }))
      }, 3000)

    } catch (err) {
      console.log(err, 'cannot add to liked song')
    }
    finally {

    }
  }



  function onRightClickSong(ev, song) {
    ev.preventDefault()
    setSongContextMenu({
      visible: true,
      x: ev.pageX,
      y: ev.pageY,
      song
    })
  }

  function onRightClickStation(ev) {
    ev.preventDefault()
    setStationContextMenu({
      visible: true,
      x: ev.pageX,
      y: ev.pageY,
    })
  }

  function openStationMenu(ev) {
    ev.preventDefault()
    setStationContextMenu({
      visible: true,
      x: ev.pageX,
      y: ev.pageY,
    })
  }

  function onBackToList() {
    dispatch({ type: SET_STATION, station: null })
  }
  function onPlaySongFromStation(songIdx) {
    dispatch({ type: SET_CURRENT_PLAYLIST, songs })
    // dispatch({ type: SET_CURRENT_SONG, song: station.songs[songIdx], isPlaying: true })
    dispatch({ type: SET_CURRENT_SONG, song: station.songs[songIdx] })
    dispatch(setIsPlaying(!isPlaying))
  }

  function togglePlay(song) {
    if (!currentSong || currentSong.id !== song.id) {
      // New song clicked: set song and start playing
      dispatch({ type: SET_CURRENT_SONG, song })
      dispatch(setIsPlaying(true))
    } else {
      // Same song clicked: just toggle play/pause
      dispatch({ type: SET_CURRENT_PLAYLIST, songs })
      dispatch({ type: SET_CURRENT_SONG, song })
      dispatch(setIsPlaying(!isPlaying))
    }
  }

  function handleDragEnd(result) {
    if (!result.destination) return

    const reordered = Array.from(songs)
    const [moved] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, moved)
    setSongs(reordered)

    const updatedStation = { ...station, songs: reordered }
    updateStation(updatedStation)
  }

  function onAddSongToStation(song) {
    addSong(stationId, song)



    setUserMsg({
        visible: true,
        message: `Added to ${station.name}.` ,
        image: getCloudinaryImg(station.createdBy.imgUrl), 
      })

      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        setUserMsg(prev => ({ ...prev, visible: false }))
      }, 3000)

  }

  function onRemoveSongFromStation(song) {
    console.log('song: ', song)
    console.log('station id: ', station._id)
    removeSong(stationId, song)


    setUserMsg({
        visible: true,
        message: `Removed from ${station.name}.` ,
        image: getCloudinaryImg(station.createdBy.imgUrl), 
      })

      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        setUserMsg(prev => ({ ...prev, visible: false }))
      }, 3000)
  }

  // function onSelectSong(song) {
  //       dispatch({ type: SET_STATION, station: null })
  //       dispatch({ type: SET_CURRENT_PLAYLIST, songs: [song] ,isPlaying: true })
  //       dispatch({ type: SET_CURRENT_SONG, song })
  //   }



console.log("stationDuration: ", stationDuration)
  const { createdBy } = station

  // console.log("variable: ", variable)
  if (!station) return <div>Loading...</div>
  return (
    <section className="station-details">
      <ColorThief imgSrc={getCloudinaryImg(createdBy.imgUrl)} onColorReady={setDominantColor} />
      <div className="station-header"
        style={{
          backgroundColor: `${dominantColor}`,
          backgroundImage: `linear-gradient(transparent 0%, rgba(0,0,0,0.5) 100%)`,
          boxShadow: `0 1px 1000px 0  ${dominantColor}`
        }}>
        <div className="station-header-content">
          <img
            className="station-img"
            // src={createdBy.imgUrl?.startsWith('http') ? createdBy.imgUrl : getCloudinaryImg(createdBy.imgUrl)}
            src={getCloudinaryImg(createdBy.imgUrl)}
            alt={station.name}
          />
          {/* {loggedInUser?._id === station.createdBy._id && station.type !== 'liked station' && (
            <button onClick={() => { onRemoveStation(station._id) }}>Remove</button>
          )} */}

          <div className="station-info">
            <p>Public Playlist</p>
            <h1 className="station-name-input"
              onClick={() => setIsEditModalOpen(true)}
              onContextMenu={onRightClickStation}
            >{name}
            </h1>

            {isEditModalOpen && (
              <EditStationModal
                stationName={station.name}
                onClose={(updated) => {
                  setIsEditModalOpen(false)
                  if (updated?.name) setName(updated.name)
                }}
                station={station}
                stationImg={createdBy.imgUrl}
              />
            )}

            <p>
              <span style={{ fontWeight: "700" }}> {createdBy.fullname}</span><span style={{ color: "#b3b3b3" }}> • {songs.length} {songs.length === 1 ? 'song' : 'songs'} , about {stationDuration} </span>
            </p>
          </div>
        </div>
      </div>
      <div className="controls">
        <span className="play-btn-container" onClick={() => togglePlay(currentSong)}>
          {station.songs.some(song => song.id === currentSong.id) && isPlaying ? (
            <HoverPauseBtn className="play-btn" />
          ) : (
            <HoverPlayBtn className="play-btn" />
          )}
        </span>

        {station.createdBy?._id === loggedInUser?._id && (
          <OptionsBtn
            className="options-btn"
            onClick={(ev) => {
              ev.preventDefault()
              ev.stopPropagation()
              setStationContextMenu({
                visible: true,
                x: ev.clientX,
                y: ev.clientY,
              })
            }}
          />
        )}

      </div>
      <div className="song-list-container">
        <div className='list-header-container'>
          <div className="song-list-header">
            <p className="col index-header">#</p>
            <p className="col title-header">Title</p>
            <p className="col album-header">Album</p>
            <p className="col date-added-header">Date Added</p>
            <ClockIcon />
          </div>
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="songList">
            {(provided) => (
              <div
                className="song-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {songs.map((song, idx) => (
                  <Draggable
                    key={song.id || idx}
                    draggableId={song.id || `song-${idx}`}
                    index={idx}
                  >
                    {(provided) => (
                      <div
                        className="song-row"
                        onClick={() => onPlaySongFromStation(idx)}
                        onContextMenu={(ev) => onRightClickSong(ev, song)}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className={
                          currentSong.id === song.id
                            ? (!isPlaying ? "song-index song-index-active" : "song-index-off song-index")
                            : "song-index "
                        }>
                          {idx + 1}
                        </span>

                        {currentSong.id === song.id && isPlaying ? <HoverPauseBtn className="hover-pause-btn" /> : <HoverPlayBtn className="hover-play-btn" />}
                        {currentSong.id === song.id && isPlaying && (
                          <div className="playing-bars">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        )}

                        <div className='info-wrapper'>
                          <img className="song-img" src={song.imgUrl} alt="" />
                          <div className="song-info">
                            <p className={currentSong.id === song.id ? "song-title song-title-active" : "song-title"}>{song.title}</p>
                            <p className="song-artist">{song.artist}</p>
                          </div>
                        </div>
                        <p className="song-album">{song.album}</p>
                        <p className="song-date-added">{formatSpotifyDate(song.addedAt)}</p>
                        <div className={loggedInUser?.likedSongsIds?.includes(song.id) ? "hovered-like-btn liked" : "hovered-like-btn"}>
                          <button
                            onClick={(ev) => {
                              ev.stopPropagation()
                              onToggleLike(song, loggedInUser, station, stations)
                            }}
                          >
                            {loggedInUser?.likedSongsIds?.includes(song.id)
                              ? <LikedSongCheckmark />
                              : <AddLikedBtn />}
                          </button>
                        </div>
                        <p className="song-formatted-duration">{formatTime(song.duration)}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className='search-inside-playlist-container'>
        {isDisplayingSearch ?
          <div className='search-inside-playlist-container'>
            <p className='playlist-srch-header search'>Let's find something for your playlist</p>
            <div className="search-wrapper">
              <span className='magnifying-glass-header-filter'><MagnifyingGlassIcon /></span>
              <div className='playlist-search-container'></div>
              <input
                type="text"
                className="playlist-filter search"
                placeholder="Search for songs or episodes"
                value={searchTxt}
                onChange={(ev) => {
                  const value = ev.target.value
                  setSearchTxt(value)
                }}
              />
              <div className='close-playlist-search' onClick={() => {
                setIsDisplayingSearch(false)
                setSearchTxt('')
              }}
              >
                <CloseSearchIcon className='icon' /></div>
            </div>

          </div> :
          <div className='find-more-btn' onClick={() => setIsDisplayingSearch(true)}>Find more</div>
        }
      </div>
      {isDisplayingSearch && (
        <div className="song-list search">

          {stationSearchResults.map((song, idx) => (
            <div className="song-row search"
              key={song.id || idx}
              index={idx}
              onClick={() => onSelectSong(song)}>
              <div className='info-wrapper search'>
                <img className="song-img search" src={song.imgUrl} alt="" />
                <div className="song-info search">
                  <p className="song-title search">{song.title}</p>
                  <p className="song-artist search">{song.artist}</p>
                </div>
              </div>

              <p className="song-date-added search">{formatSpotifyDate(song.addedAt)}</p>

              <button className='add-to-playlist-btn search' onClick={() => onAddSongToStation(song)}>Add</button>

            </div>
          ))
          }

        </div >
      )}

      {SongContextMenu.visible && (
        <div
          className="custom-context-menu"
          style={{
            top: `${SongContextMenu.y}px`,
            left: `${SongContextMenu.x}px`,
            position: 'fixed',
            backgroundColor: '#282828',
            border: '1px solid #555',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 1000,
          }}
          onClick={(ev) => ev.stopPropagation()}
        >
          <button onClick={() => {
            onRemoveSongFromStation(SongContextMenu.song)
            setSongContextMenu({ visible: false, x: 0, y: 0 })
          }}>
            Remove Song
          </button>
        </div>
      )}
      {stationContextMenu.visible && station.createdBy._id === loggedInUser._id && (
        <div
          className="custom-context-menu"
          style={{
            top: `${stationContextMenu.y}px`,
            left: `${stationContextMenu.x}px`,
            position: 'fixed',
            backgroundColor: '#282828',
            border: '1px solid #555',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 1000,
          }}
          onClick={(ev) => ev.stopPropagation()}
        >
          <button onClick={() => {
            setIsEditModalOpen(true)
            setStationContextMenu({ visible: false, x: 0, y: 0 })
          }}>
            Edit Station
          </button>

          {station.type !== 'liked station' && (
            <button onClick={() => {
              onRemoveStation(station._id)
              setStationContextMenu({ visible: false, x: 0, y: 0 })
            }}>
              Remove Station
            </button>
          )}

        </div>
      )}
      {userMsg.visible && (
        <div className="toast-modal">
          <img src={userMsg.image} alt="station" />
          <span>{userMsg.message}</span>
        </div>
      )}
    </section >
  )
}

