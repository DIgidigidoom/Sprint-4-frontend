import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadStation} from '../store/actions/station.actions'
import { Link } from 'react-router-dom'


export function StationDetails() {

  const {stationId} = useParams()
  const station = useSelector(storeState => storeState.stationModule.station)

  useEffect(() => {
    loadStation(stationId)
  }, [stationId])
    



  return (
    <section className="station-details">
      <Link to="/station">Back to list</Link>
      <h1>Station Details</h1>
    </section>
  )
}