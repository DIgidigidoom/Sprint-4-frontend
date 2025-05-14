import { StationList } from '../cmps/StationList.jsx'
import { useSelector } from 'react-redux'
import { StationDetails } from './StationDetails.jsx'
import { StaitionSearch } from '../cmps/StationSearch.jsx'

export default function MainPage({ onRemoveStation, onUpdateStation, onSelectStation, stations }) {

    const station = useSelector(storeState => storeState.stationModule.station)
    const youtubeResults = useSelector(storeState => storeState.youtubeModule.youtubeResults)
    console.log("youtubeResults ", youtubeResults)
    return (
        <div className='main-page'>
            { youtubeResults.length !==0 ? <StaitionSearch /> :
            station ? (
                <StationDetails />
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
