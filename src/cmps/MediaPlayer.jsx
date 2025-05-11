import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { setNextSong } from '../store/actions/station.actions.js'
import { ReactYouTube } from './ReactYoutube.jsx'
import { SET_NEXT_SONG } from '../store/reducers/station.reducer.js'

export function MediaPlayer() {

    const station = useSelector(storeState => storeState.stationModule.station)
    const songIdx = useSelector(storeState => storeState.stationModule.currentSongIdx)
    const dispatch = useDispatch()

    const [isPlaying, setIsPlaying] = useState(false)
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

    if (!song) return null
    return (
        <footer className="media-player">
            <div className="song-info">
                <img src={song.imgUrl} alt={song.title} />
                <div>{song.title}</div>
            </div>

            <div className="controls">
                <button onClick={togglePlay}>{isPlaying ? '⏸️' : '▶️'}</button>
                <button onClick={nextSong}>⏭️</button>
            </div>
            <ReactYouTube
                videoId={song.url}
                opts={{ width: 0, height: 0 }}
                onReady={onReady}
            />
            {/* <audio ref={playerRef} src={`www.youtube.com/watch?v=${song.url}`}></audio> */}
        </footer>
    )
}