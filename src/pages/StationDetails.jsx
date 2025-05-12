import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadStation } from '../store/actions/station.actions'
import { stationService } from '../services/station/station.service.local'

export function StationDetails() {
  const { stationId } = useParams()
  const navigate = useNavigate()
  const station = useSelector(storeState => storeState.stationModule.station)


  useEffect(() => {
    if (stationId) loadStation(stationId)
  }, [stationId])



  if (!station) return <div>Loading...</div>

  return (
    <section className="station-details">
      <div className="station-header">
        {station.imgUrl && (
          <img className="station-img" src={station.imgUrl} alt={station.name} />
        )}
        <div className="station-info">
          <h1>{station.name}</h1>
          <div className="station-meta">Playlist • {station.songs?.length || 0} songs</div>
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
    </section>
  )
}
