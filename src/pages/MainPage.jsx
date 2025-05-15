import { StationList } from '../cmps/StationList.jsx'
import { useSelector } from 'react-redux'
import { StationDetails } from './StationDetails.jsx'
import { StaitionSearch } from '../cmps/StationSearch.jsx'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadStation } from '../store/actions/station.actions'

export default function MainPage({
  stations,
  onRemoveStation,
  onUpdateStation,
  onSelectStation
}) {
  const { stationId } = useParams()
  const station = useSelector(storeState => storeState.stationModule.station)
  const youtubeResults = useSelector(storeState => storeState.youtubeModule.youtubeResults)

  useEffect(() => {
    if (stationId && (!station || station._id !== stationId)) {
      loadStation(stationId)
    }
  }, [stationId, station])

  return (
    <div className="main-page">
      {youtubeResults.length !== 0 ? (
        <StaitionSearch />
      ) : stationId ? (
        !station ? (
          <div>Loading station...</div>
        ) : (
          <StationDetails />
        )
      ) : (
        <StationList
          stations={stations}
          onRemoveStation={onRemoveStation}
          onUpdateStation={onUpdateStation}
          onSelectStation={onSelectStation}
        />
      )}
    </div>
  )
}
