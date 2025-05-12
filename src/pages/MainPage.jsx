import React from 'react'
import { StationList } from '../cmps/StationList'

export default function MainPage({stations, onRemoveStation, onUpdateStation}) {
    return (
        <div className='main-page'>
            <StationList
                stations={stations}
                onRemoveStation={onRemoveStation}
                onUpdateStation={onUpdateStation} />
        </div>
    )
}
