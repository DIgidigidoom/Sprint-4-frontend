import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { setNextSong, setPrevSong } from '../store/actions/station.actions.js'
import { ReactYouTube } from './ReactYoutube.jsx'
import React from 'react'

export function MediaPlayer() {

    const station = useSelector(storeState => storeState.stationModule.station)
    const songIdx = useSelector(storeState => storeState.stationModule.currentSongIdx)
    const dispatch = useDispatch()

    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(100)
    const playerRef = useRef(null)

    const song = station?.songs[songIdx]

    useEffect(() => {
        console.log("song: ", song)
        if (playerRef.current && isPlaying) playerRef.current.playVideo()
    }, [song])

    function onReady(event) {
        const player = event?.target
        if (!player) return

        playerRef.current = player
        player.setVolume(100)
        player.playVideo()
    }

    function togglePlay() {
        if (!playerRef.current) return

        if (isPlaying) {
            playerRef.current.pauseVideo()
        } else {
            playerRef.current.playVideo()
        }
        setIsPlaying(!isPlaying)
    }

    function nextSong() {
        dispatch(setNextSong())
    }

    function prevSong() {
        dispatch(setPrevSong())
    }

    function handleVolumeChange(ev) {
        const newVolume = +ev.target.value
        setVolume(newVolume)
        if (playerRef.current) {
            playerRef.current.setVolume(newVolume)
        }
    }


    return (
        <footer className="media-player">

            <div className="track-info">
                {song && (
                    <React.Fragment>
                        <img src={song.imgUrl} alt={song.title} />
                        <div>{song.title}</div>
                    </React.Fragment>
                )}
            </div>


            <div className="track-controls">
                <button onClick={prevSong} disabled={!song}>⏮️</button>
                <button onClick={togglePlay} disabled={!song}>
                    {isPlaying ? '⏸️' : '▶️'}
                </button>
                <button onClick={nextSong} disabled={!song}>⏭️</button>
            </div>

            <div className="track-options">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider"
                />
            </div>

            {song && (
                <span className="react-youtube">
                    <ReactYouTube
                        videoId={song.url}
                        opts={{ width: 0, height: 0 }}
                        onReady={onReady}
                    />
                </span>
            )}
        </footer>
    )
}