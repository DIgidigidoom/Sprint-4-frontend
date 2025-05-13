import { useState } from 'react'
import { StationPreview } from './StationPreview.jsx'

export function StationList({ stations, onRemoveStation, onUpdateStation, onSelectStation }) {
    return (
        <section className="station-list">
            <div className='station-list-stations'>
                {stations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>

        </section>
    )
}
