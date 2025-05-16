import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { setIsPlaying } from '../store/actions/station.actions.js'
import { SET_NEXT_SONG, SET_PREV_SONG } from '../store/reducers/station.reducer'
import { toggleLike } from '../store/actions/user.actions'
import { ReactYouTube } from './ReactYoutube.jsx'
import React from 'react'
import PlayBtn from '../assets/icons/hover-play-btn.svg?react'
import PauseBtnWide from '../assets/icons/pause-btn-media-player-wide.svg?react'
import PreviousBtn from '../assets/icons/previous-btn-media-player.svg?react'
import NextBtn from '../assets/icons/next-btn-media-player.svg?react'
import ShuffleBtn from '../assets/icons/shuffle-btn-media-player.svg?react'
import RepeatBtn from '../assets/icons/repeat-btn-media-player.svg?react'
import AddLikedBtn from '../assets/icons/add-liked-btn.svg?react'
import LikedSongCheckmark from '../assets/icons/liked-song-checkmark.svg?react'
import VolumeMute from '../assets/icons/volume-mute.svg?react'
import VolumeLow from '../assets/icons/volume-low.svg?react'
import VolumeMedium from '../assets/icons/volume-medium.svg?react'
import VolumeLoud from '../assets/icons/volume-loud.svg?react'

export function MediaPlayer() {


    const songIdx = useSelector(storeState => storeState.stationModule.currentSongIdx)
    const currentSong = useSelector(storeState => storeState.stationModule.currentSong)
    const isPlaying = useSelector(storeState => storeState.stationModule.isPlaying)
    const stations = useSelector(storeState => storeState.stationModule.stations)
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const station = useSelector(storeState => storeState.stationModule.station)
    const dispatch = useDispatch()


    const [volume, setVolume] = useState(100)
    const [prevVolume, setPrevVolume] = useState(100)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isRepeat, setIsRepeat] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const playerRef = useRef(null)



    const song = currentSong

    useEffect(() => {
        const interval = setInterval(() => {
            if (!playerRef.current || !isPlaying) return

            const currentTime = playerRef.current.getCurrentTime?.()
            const totalTime = playerRef.current.getDuration?.()
            if (typeof currentTime === 'number' && typeof totalTime === 'number') {
                setProgress(currentTime)
                setDuration(totalTime)
            }
        }, 500)

        return () => clearInterval(interval)
    }, [song, isPlaying, volume, songIdx])

    function onReady(event) {
        const player = event?.target
        if (!player) return

        playerRef.current = player
        player.setVolume(100)
    }
    function onEnd() {
        if (isRepeat && playerRef.current) {
            playerRef.current.seekTo(0)
            playerRef.current.playVideo()
        } else {
            nextSong()
        }
    }

    function togglePlay() {
        if (!playerRef.current) return

        if (isPlaying) {
            playerRef.current.pauseVideo()
            dispatch(setIsPlaying(false))
        } else {
            playerRef.current.playVideo()
            dispatch(setIsPlaying(true))
        }
    }

    function nextSong() {
        dispatch({ type: SET_NEXT_SONG })
    }

    function prevSong() {
        dispatch({ type: SET_PREV_SONG })
    }

    function handleVolumeChange(ev) {
        const newVolume = +ev.target.value
        setVolume(newVolume)
        if (playerRef.current) {
            playerRef.current.setVolume(newVolume)
        }
    }

    function toggleMute() {
        if (volume === 0) {
            setVolume(prevVolume)
            if (playerRef.current) playerRef.current.setVolume(prevVolume)
        } else {

            setPrevVolume(volume)
            setVolume(0)
            if (playerRef.current) playerRef.current.setVolume(0)
        }
    }



    function formatTime(sec) {
        const minutes = Math.floor(sec / 60)
        const seconds = Math.floor(sec % 60).toString().padStart(2, '0')
        return `${minutes}:${seconds}`
    }


    function getVolumeIcon() {
        if (volume === 0) return <VolumeMute />
        if (volume <= 40) return <VolumeLow />
        if (volume <= 80) return <VolumeMedium />
        return <VolumeLoud />
    }

    const isLiked = loggedInUser?.likedSongsIds?.includes(song?.id)
    
    return (
        <footer className="media-player">
            <div className="track-info">
                {song && (
                    <React.Fragment>
                        <img src={song.imgUrl} alt={song.title} />
                        <div>{song.title}</div>
                        <button
                            className="like-btn"
                            onClick={(ev) => {
                                ev.stopPropagation()
                                toggleLike(song, loggedInUser, station, stations)
                            }}
                        >
                            {isLiked ? <LikedSongCheckmark /> : <AddLikedBtn />}
                        </button>
                    </React.Fragment>
                )}
            </div>
            <div className="track-controls">
                <div className="track-nav-container">

                    <button
                        onClick={() => setIsShuffle(prev => !prev)}
                        title="Toggle Shuffle"
                        className={`shuffle-btn ${isShuffle ? 'shuffle-active' : ''}`}
                    >
                        <ShuffleBtn className={isShuffle ? "shuffle-green shuffle-btn-svg" : "shuffle-white shuffle-btn-svg"} />
                    </button>

                    <button onClick={prevSong} disabled={!song}>
                        <PreviousBtn className="previous-btn" />
                    </button>

                    <button className="play-btn" onClick={togglePlay} disabled={!song}>
                        {isPlaying ? <PauseBtnWide className="pause-svg" /> : <PlayBtn />}
                    </button>

                    <button onClick={nextSong} disabled={!song}>
                        <NextBtn className="next-btn" />
                    </button>

                    <button
                        onClick={() => setIsRepeat(prev => !prev)}
                        title="Toggle Repeat"
                        className={`repeat-btn ${isRepeat ? 'repeat-active' : ''}`}
                    >

                        <RepeatBtn className={isRepeat ? "repeat-green repeat-btn-svg" : "repeat-white repeat-btn-svg"} />
                    </button>

                </div>
                <div className="track-seek-container">
                    <div className='track-time'>{formatTime(progress)}</div>
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
                        style={{
                            '--seek-fill': duration ? `${(progress / duration) * 100}%` : '0%'
                        }}
                    />
                    <div className='track-time'>{formatTime(duration)}</div>
                </div>
            </div>
            <div className="track-options">
                <button className="mute-btn" onClick={toggleMute}>
                    <span>{getVolumeIcon()}</span>
                </button>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-slider"
                    style={{ '--vol-fill': `${volume}%` }}
                />
            </div>

            {song && (
                <span className="react-youtube">
                    <ReactYouTube
                        key={song.url}
                        videoId={song.url}
                        isPlaying={isPlaying}
                        volume={volume}
                        playerRef={playerRef}
                        onEnd={onEnd}
                    />
                </span>
            )}
        </footer>
    )
}