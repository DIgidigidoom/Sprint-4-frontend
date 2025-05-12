import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStation, updateStation } from '../store/actions/station.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { useDispatch } from 'react-redux'
import { SET_STATION } from '../store/reducers/station.reducer'

export function StationDetails() {
  const station = useSelector(storeState => storeState.stationModule.station)
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (station) setName(station.name)
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

  if (!station) return <div>Loading...</div>

  return (
    <section className="station-details">
      <div className="station-header">
        {station.imgUrl && (
          <img className="station-img" src={station.imgUrl} alt={station.name} />
        )}
        <div className="station-info">

          <input
            className="station-name-input"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <button onClick={onSaveName}>Save</button>

          <div className="station-meta">
            Playlist • {station.songs?.length || 0} songs
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="btn-play">
          <i className="fa-solid fa-play"></i>
        </button>
      </div>

      {station.songs && station.songs.length ? (
        <div className="song-list">
          {station.songs.map((song, idx) => (
            <div key={song._id || idx} className="song-row">
              <span className="song-index">{idx + 1}</span>
              <div className="song-info">
                <p className="song-title">{song.title}</p>
                <p className="song-artist">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No songs yet.</p>
      )}

      <button className="btn-back" onClick={onBackToList}>
        ← Back to list
      </button>


    </section>
  )
}
