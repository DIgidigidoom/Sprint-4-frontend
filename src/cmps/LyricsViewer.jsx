import { useSelector, useDispatch } from 'react-redux'
import { getLyrics } from '../services/lyrics.service'
import {getMutedSpotifyColor} from '../services/util.service'
import { SET_LYRICS_CACHE } from '../store/reducers/station.reducer'
import { useEffect, useRef, useState } from 'react'

export function LyricsViewer({ song, onClose }) {
  const dispatch = useDispatch()
  const lyricsCache = useSelector(storeState => storeState.stationModule.lyricsCache)
  const [lyrics, setLyrics] = useState('Loading lyrics...')

  useEffect(() => {
    if (!song?.title || !song?.artist) return setLyrics('Missing song info.')
    const cacheKey = song.id || `${song.title}|${song.artist}`

    // Use cached lyrics if available
    if (lyricsCache[cacheKey]) {
      setLyrics(lyricsCache[cacheKey])
      return
    }

    // Else, fetch from API
    getLyrics(song.title, song.artist).then(fetchedLyrics => {
  
      setLyrics(fetchedLyrics)

      dispatch({
        type: SET_LYRICS_CACHE,
        cacheKey,
        lyrics: fetchedLyrics
      })
    }).catch(() => setLyrics('Could not fetch lyrics.'))

  }, [song])

  return (
    <div className="lyrics-modal" style={{backgroundColor : getMutedSpotifyColor()}}>
      <div className="lyrics-content">
        <pre>{lyrics}</pre>
      </div>
    </div>
  )
}
