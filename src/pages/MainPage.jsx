import { StationList } from '../cmps/StationList.jsx'
import { useSelector } from 'react-redux'
import { StationDetails } from './StationDetails.jsx'
import { StaitionSearch } from '../cmps/StationSearch.jsx'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadStation } from '../store/actions/station.actions'
import { Explore } from '../cmps/Explore.jsx'
import { ExploreDetails } from '../cmps/ExploreDetails.jsx'
import { LyricsViewer } from '../cmps/LyricsViewer.jsx'
import { Footer } from '../cmps/Footer.jsx'


export default function MainPage({
  stations,
  onRemoveStation,
  onUpdateStation,
  onSelectStation,
  showLyrics,
  currentSong,
  setShowLyrics,
}) {
  const { stationId } = useParams()
  const station = useSelector(storeState => storeState.stationModule.station)
  const youtubeResults = useSelector(storeState => storeState.youtubeModule.youtubeResults)
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')

  useEffect(() => {

    if (stationId && (!station || station._id !== stationId)) {
      loadStation(stationId)
    }
  }, [stationId, station])

  return (

    <div className="main-page">
      {youtubeResults.length !== 0 ? (
        <StaitionSearch />
      ) : searchQuery === '' ? (
        <Explore />
      ) : searchQuery ? (
        <ExploreDetails tag={searchQuery} />
      ) : stationId ? (
        !station ? (
          <div>Loading station...</div>
        ) : (
          <StationDetails onRemoveStation={onRemoveStation} />
        )
      ) : (
        <StationList
          stations={stations}
          onRemoveStation={onRemoveStation}
          onUpdateStation={onUpdateStation}
          onSelectStation={onSelectStation}
        />
      )}

      <Footer />
      {showLyrics && currentSong && (
        <LyricsViewer song={currentSong} onClose={() => setShowLyrics(false)} />
      )}
    </div>

  )
}
