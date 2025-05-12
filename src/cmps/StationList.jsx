import { useState } from 'react'
import { StationPreview } from './StationPreview.jsx'

export function StationList({ stations, onRemoveStation, onUpdateStation, onSelectStation }) {
    const [activeBtn, setActiveBtn] = useState('All')
    return (
        <section className="station-list">
            <div className='station-list-header'>
                <div className='station-list-header-btns'>
                    {['All', 'Music', 'Podcasts'].map(type => (
                        <button
                            key={type}
                            className={activeBtn === type ? 'active' : ''}
                            onClick={() => setActiveBtn(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
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
