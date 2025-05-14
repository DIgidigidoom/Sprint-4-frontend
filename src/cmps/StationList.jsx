import { useState,useEffect } from 'react'
import { StationPreview } from './StationPreview.jsx'

export function StationList({ stations, onSelectStation }) {

    const [spotifyStations, setSpotifyStations] = useState(stations)
    useEffect(() => {
            const filteredStations = stations.filter(station => !station.owner)
            setSpotifyStations(filteredStations)
        }, [stations])
    
    return (
        <section className="station-list">
            <h2 className='station-list-title'>Reccomended for you</h2>
            <div className='station-list-stations'>
                {spotifyStations.map(station =>
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
