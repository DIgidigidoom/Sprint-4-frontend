import { useSelector } from 'react-redux'
import { StationList } from '../cmps/StationList'
import { StationDetails } from './StationDetails'

export default function MainPage(props) {
    const station = useSelector(storeState => storeState.stationModule.station)
    return (
        <div className='main-page'>
            {station ? (
                <StationDetails />
            ) : (
                <StationList
                    stations={props.stations}
                    onRemoveStation={props.onRemoveStation}
                    onUpdateStation={props.onUpdateStation}
                    onSelectStation={props.onSelectStation}
                />
            )}
        </div>
    )
}
