import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { setNextSong, setPrevSong, setIsPlaying } from '../store/actions/station.actions.js'
import { ReactYouTube } from './ReactYoutube.jsx'
import React from 'react'
import PlayBtn from '../assets/icons/hover-play-btn.svg?react'
import PauseBtn from '../assets/icons/pause-btn-media-player.svg?react'
import PauseBtnWide from '../assets/icons/pause-btn-media-player-wide.svg?react'
import PreviousBtn from '../assets/icons/previous-btn-media-player.svg?react'
import NextBtn from '../assets/icons/next-btn-media-player.svg?react'
import ShuffleBtn from '../assets/icons/shuffle-btn-media-player.svg?react'
import RepeatBtn from '../assets/icons/repeat-btn-media-player.svg?react'
import AddLikedBtn from '../assets/icons/add-liked-btn.svg?react'
import VolumeMute from '../assets/icons/volume-mute.svg?react'
import VolumeLow from '../assets/icons/volume-low.svg?react'
import VolumeMedium from '../assets/icons/volume-medium.svg?react'
import VolumeLoud from '../assets/icons/volume-loud.svg?react'

export function MediaPlayer() {

    const station = useSelector(storeState => storeState.stationModule.station)
    const songIdx = useSelector(storeState => storeState.stationModule.currentSongIdx)
    const isPlaying = useSelector(storeState => storeState.stationModule.isPlaying)
    const dispatch = useDispatch()


    const [volume, setVolume] = useState(100)
    const [prevVolume, setPrevVolume] = useState(100)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isRepeat, setIsRepeat] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const playerRef = useRef(null)



    const song = station?.songs[songIdx]

    useEffect(() => {
        console.log("playerRef: ", playerRef)
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
    }, [song, isPlaying, volume])

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
        } else {
            playerRef.current.playVideo()
        }
        dispatch(setIsPlaying(!isPlaying))
    }

    function nextSong() {
        if (isShuffle && station?.songs?.length > 1) {
            let nextIdx
            do {
                nextIdx = Math.floor(Math.random() * station.songs.length)
            } while (nextIdx === songIdx)

            dispatch({ type: 'SET_SONG_IDX', idx: nextIdx })
        } else {
            dispatch(setNextSong())
        }
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

    // const volumeIconClass =
    //     volume === 0
    //         ? 'lucide--volume-x'
    //         : volume <= 80
    //             ? 'lucide--volume-1'
    //             : 'lucide--volume-2'

    function getVolumeIcon() {
        if (volume === 0) return <VolumeMute />
        if (volume <= 40) return <VolumeLow />
        if (volume <= 80) return <VolumeMedium />
        return <VolumeLoud />
    }


    return (
        <footer className="media-player">
            <div className="track-info">
                {song && (
                    <React.Fragment>
                        <img src={song.imgUrl} alt={song.title} />
                        <div>{song.title}</div>
                        <AddLikedBtn className="add-liked-btn" />
                    </React.Fragment>
                )}
            </div>
            <div className="track-controls">
                <div className="track-nav-container">

                    <button
                        onClick={() => setIsShuffle(prev => !prev)}
                        title="Toggle Shuffle"
                    >
                        {/* <span class={isShuffle ? "shuffle-green" : "shuffle-white"}></span> */}
                        <ShuffleBtn className={isShuffle ? "shuffle-green shuffle-btn" : "shuffle-white shuffle-btn"} />
                    </button>

                    <button onClick={prevSong} disabled={!song}>
                        <PreviousBtn />
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
                    >
                        {/* <span class={isRepeat ? "repeat-green" : "repeat-white"}></span> */}
                        <RepeatBtn className={isRepeat ? "repeat-green repeat-btn" : "repeat-white repeat-btn"} />
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
                />
            </div>

            {song && (
                <span className="react-youtube">
                    <ReactYouTube
                        videoId={song.url}
                        opts={{ width: 0, height: 0 }}
                        onReady={onReady}
                        onEnd={onEnd}
                    />
                </span>
            )}
        </footer>
    )
}