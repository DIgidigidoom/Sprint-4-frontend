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
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const playerRef = useRef(null)

    const song = station?.songs[songIdx]

    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current && isPlaying) {
                const currentTime = playerRef.current.getCurrentTime()
                const totalTime = playerRef.current.getDuration()
                setProgress(currentTime)
                setDuration(totalTime)
            }
        }, 500)
        console.log("song: ", song)
        if (playerRef.current && isPlaying) playerRef.current.playVideo()
        return () => clearInterval(interval)
    }, [song, isPlaying])

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

    function formatTime(sec) {
        const minutes = Math.floor(sec / 60)
        const seconds = Math.floor(sec % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
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
                <div className='track-controls-middle'>
                    <div className="track-nav-container">
                        <button onClick={prevSong} disabled={!song}>⏮️</button>
                        <button onClick={togglePlay} disabled={!song}>
                            {isPlaying ? '⏸️' : '▶️'}
                        </button>
                        <button onClick={nextSong} disabled={!song}>⏭️</button>
                    </div>
                    <div className='track-seek-container'>
                        <span>{formatTime(progress)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            value={progress}
                            step="0.1"
                            onChange={(ev) => {
                                const newTime = +ev.target.value
                                playerRef.current.seekTo(newTime, true)
                                setProgress(newTime)
                            }}
                            className="seek-bar"
                        />
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
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