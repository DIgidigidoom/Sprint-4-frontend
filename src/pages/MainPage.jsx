import React from 'react'
import { StationList } from '../cmps/StationList.jsx'

import { useSelector } from 'react-redux'
import { StationDetails } from './StationDetails.jsx'

export default function MainPage({ onRemoveStation, onUpdateStation, onSelectStation, stations }) {
    const station = useSelector(storeState => storeState.stationModule.station)
    return (
        <div className='main-page'>
            {station ? (
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
