import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userService } from '../services/user/user.service.local'
import { loadStation, updateStation, addToLiked, setIsPlaying } from '../store/actions/station.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useParams } from 'react-router-dom'
import { formatDuration, formatSpotifyDate, getCloudinaryImg, calcStationDuration } from '../services/util.service'
import { SET_STATION, SET_CURRENT_PLAYLIST, SET_CURRENT_SONG } from '../store/reducers/station.reducer'
import { addSongToLiked } from '../store/actions/user.actions'
import { SET_USER } from '../store/reducers/user.reducer'
import AddLikedBtn from '../assets/icons/add-liked-btn.svg?react'
import PlayBtn from '../assets/icons/play-btn-preview.svg?react'
import ClockIcon from '../assets/icons/clock-icon.svg?react'
import { EditStationModal } from '../cmps/EditStationModal'
import { ColorThief } from '../cmps/ColorThief'

export function StationDetails() {
  const station = useSelector(storeState => storeState.stationModule.station)
  const stations = useSelector(storeState => storeState.stationModule.stations)
  const loggedInUser = useSelector(storeState => storeState.userModule.user)


  const [name, setName] = useState('')
  const [songs, setSongs] = useState(station.songs)
  const [stationDuration, setStationDuration] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [dominantColor, setDominantColor] = useState(null)
  // const loggedInUser = userService.getLoggedinUser()

  const { stationId } = useParams()
  const dispatch = useDispatch()
  const colorThief = useRef()

  useEffect(() => {
    if (stationId) {
      loadStation(stationId)
    }
  }, [stationId])


  useEffect(() => {
    if (station) {
      setName(station.name)
      const stationSongs = station.songs || []
      setSongs(stationSongs)
      dispatch(setIsPlaying(false))
      setStationDuration(calcStationDuration(stationSongs))
    }


  }, [station])

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

  function onBackToList() {
    dispatch({ type: SET_STATION, station: null })
  }
  function onPlaySongFromStation(songIdx) {
    dispatch({ type: SET_CURRENT_PLAYLIST, songs })
    dispatch({ type: SET_CURRENT_SONG, song: station.songs[0], isPlaying: false })
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

  async function onAddToLiked(ev, song) {
  ev.stopPropagation()

  try {
    const likedStation = stations.find(
      station =>
        station.createdBy._id === loggedInUser._id &&
        station.type === 'liked station'
    )

    await addToLiked(likedStation, song)
    await addSongToLiked(loggedInUser, song.id) 

    showSuccessMsg('Added To Liked Songs')
  } catch (err) {
    console.error('Failed to add to liked', err)
    showErrorMsg('Failed To Add To Liked')
  }
}

  const { createdBy } = station


  if (!station) return <div>Loading...</div>

  return (
    <section className="station-details">
      <ColorThief imgSrc={getCloudinaryImg(createdBy.imgUrl)} onColorReady={setDominantColor} />
      <div className="station-header"
        style={{
          background: `linear-gradient(to bottom, ${dominantColor} 0%, hsl(0, 0.80%, 25.70%) 100%)`,
          boxShadow: `0 1px 1000px 0  ${dominantColor}`
        }}>
        <div className="station-header-content">
          <img
            className="station-img"
            src={createdBy.imgUrl?.startsWith('http') ? createdBy.imgUrl : getCloudinaryImg(createdBy.imgUrl)}
            alt={station.name}
          />
          <div className="station-info">
            <p>Public Playlist</p>
            <h1 className="station-name-input" onClick={() => setIsEditModalOpen(true)}>{name}</h1>

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
              <span style={{ fontWeight: "700" }}> {createdBy.fullname}</span><span style={{ color: "#b3b3b3" }}> • {songs.length} songs, about {stationDuration} </span>
            </p>
          </div>
        </div>
      </div>
      <div className="controls">
        <PlayBtn />
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
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="song-index">{idx + 1}</span>
                        <div className='info-wrapper'>
                          <img className="song-img" src={song.imgUrl} alt="" />
                          <div className="song-info">
                            <p className="song-title">{song.title}</p>
                            <p className="song-artist">{song.artist}</p>
                          </div>
                        </div>
                        <p className="song-album">{song.album}</p>
                        <p className="song-date-added">{formatSpotifyDate(song.addedAt)}</p>
                        <div className="hovered-like-btn">
                          <button onClick={(ev) => onAddToLiked(ev, song)}><AddLikedBtn /></button>
                        </div>
                        <p className="song-formatted-duration">{formatDuration(song.duration)}</p>
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
    </section>
  )
}
