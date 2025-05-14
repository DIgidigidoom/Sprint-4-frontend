import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStation, updateStation, addToLiked, setIsPlaying } from '../store/actions/station.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useParams, useNavigate } from 'react-router-dom'
import { formatDuration, formatSpotifyDate, getCloudinaryImg } from '../services/util.service'
import { useDispatch } from 'react-redux'
import { SET_STATION } from '../store/reducers/station.reducer'
import AddLikedBtn from '../assets/icons/add-liked-btn.svg?react'
import PlayBtn from '../assets/icons/icon-park-solid--play.svg?react'
import { EditStationModal } from '../cmps/EditStationModal'

export function StationDetails() {
  const station = useSelector(storeState => storeState.stationModule.station)
  const [name, setName] = useState('')
  const [songs, setSongs] = useState([])
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const { stationId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (stationId) {
      loadStation(stationId)

    }
  }, [stationId])


  useEffect(() => {
    if (station) {
      setName(station.name)
      setSongs(station.songs || [])
      dispatch(setIsPlaying(false))
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


  function handleDragEnd(result) {
    if (!result.destination) return

    const reordered = Array.from(songs)
    const [moved] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, moved)
    setSongs(reordered)

    // Optional: Persist song order in store/database
    const updatedStation = { ...station, songs: reordered }
    updateStation(updatedStation)
  }

  async function onAddToLiked(ev, stationId, songId) {
    console.log("onAddToLiked songId: ", songId)
    console.log("onAddToLiked stationId: ", stationId)
    ev.stopPropagation()
    try {
      await addToLiked(stationId, songId)
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

      <div className="station-header">
        <div className="station-header-content">
          <img className="station-img" src={getCloudinaryImg(createdBy.imgUrl)} alt={station.name} />
          <div className="station-info">
            <p>Public Playlist</p>
            <h1 className="station-name-input" onClick={() => setIsEditModalOpen(true)}>{name}</h1>

            {isEditModalOpen && (
              <EditStationModal
                // playlist={playlist}
                onClose={() => setIsEditModalOpen(false)}
                // onSave={handleSave}
              />
            )}
            {/* <input
              className="station-name-input"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            /> */}


            <p>
              <span style={{ fontWeight: "700" }}> {createdBy.fullname}</span><span style={{ color: "#b3b3b3" }}> • {songs.length} songs</span>
            </p>

          </div>
        </div>
      </div>

      <div className="controls">
        <PlayBtn />
      </div>
      <div className="song-list-container">
        <div className="song-list-header">
          <p className="col index-header">#</p>
          <p className="col title-header">Title</p>
          <p className="col album-header">Album</p>
          <p className="col date-added-header">Date Added</p>
          <p className="col duration-header">duration</p>
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
                          <button onClick={(ev) => onAddToLiked(ev, station._id, song.id)}><AddLikedBtn /></button>
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
      {/* <button onClick={onSaveName}>Save</button> */}
    </section>
  )
}
