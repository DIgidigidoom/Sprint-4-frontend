import { useSelector, useDispatch } from 'react-redux'
import { getLyrics } from '../services/lyrics.service'
import { getMutedSpotifyColor } from '../services/util.service'
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
    <div className="lyrics-modal" style={{ backgroundColor: getMutedSpotifyColor() }}>
      <div className="lyrics-content">
        {/* <pre>{lyrics}</pre> */}
        <pre>Yeah
          Bringing you another disturbing creation
          From the mind of one sick animal
          Who can't tell the difference
          And gets stupefied
          I've been waiting my whole life for just one fuck
          And all I needed was just one fuck
          How can you say that you don't give a fuck?
          I find myself stupefied, coming back again
          All I wanted was just one fuck
          One tiny, little, innocent fuck
          And when I feel like I'm shit out of luck
          I find myself stupefied, coming back again
          Why, do you like playing around with
          My, narrow scope of reality?
          I, can feel it all start slipping
          I think I'm breaking down
          Why, do you like playing around with
          My, narrow scope of reality?
          I, can feel it all start slipping away
          See, but I don't get it
          Don't you think maybe we could put it on credit?
          Don't you think it can take control when I don't let it?
          I get stupefied! "It's all the same", you say
          Live with it, but I don't get it
          Don't you think maybe we could put it on credit?
          Don't you think it can take control when I don't let it?
          I get stupefied! I get stupefied!
          All the people in the left wing, rock
          And all the people in the right wing, rock
          And all the people in the underground, rock
          I find myself stupefied, coming back again
          All the people in the high-rise, rock
          And all the people in the projects, rock
          And all "La Hente" in the barrio, rock
          I find myself stupefied, coming back again
          Why, do you like playing around with
          My, narrow scope of reality?
          I, can feel it all start slipping
          I think I'm breaking down
          Why, do you like playing around with
          My, narrow scope of reality?
          I, can feel it all start slipping away
          See, but I don't get it
          Don't you think maybe we could put it on credit?
          Don't you think it can take control when I don't let it?
          I get stupefied! "It's all the same", you say
          Live with it, but I don't get it
          Don't you think maybe we could put it on credit?
          Don't you think it can take control when I don't let it?
          I get stupefied! I get stupefied!
          Tefached
          Tefached
          And don't deny me
          No, baby now, don't deny me
          And darling, don't be afraid
          But I don't get it
          Don't you think maybe we could put it on credit?
          Don't you think it can take control when I don't let it?
          I get stupefied!
          Look in my face, stare in my soul, I begin to stupify-rah!
          Look in my face, stare in my soul, I begin to stupify-rah!
          Look in my face, stare in my soul, I begin to stupify-rah!
          Look in my face, stare in my soul, I begin to stupify-rah!
          Look in my face, step in my soul
          Look in my face, step in my soul
          Look in my face, step in my soul
          Look in my face, step in my soul
          Look in my face! (Step in my soul)
          Look in my face! (Step in my soul)
          Look in my face! (Step in my soul)
          I begin to stupify-rah!</pre>
      </div>
    </div>
  )
}
