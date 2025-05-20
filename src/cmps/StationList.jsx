import { useState, useEffect } from 'react'
import { StationPreview } from './StationPreview.jsx'

export function StationList({ stations, onSelectStation }) {

    const [spotifyStations, setSpotifyStations] = useState(stations)
    useEffect(() => {
        const filteredStations = stations.filter(station => !station.owner)
        setSpotifyStations(filteredStations)
    }, [stations])

    const recommendedStations = spotifyStations.filter(
        station => station.type === 'playlist'
    )
    const rockStations = spotifyStations.filter(
        station => station.type === 'album' && station.tags.includes("Rock")
    )
    const popStations = spotifyStations.filter(
        station => station.type === 'album' && station.tags.includes("Pop")
    )
    const hipHopStations = spotifyStations.filter(
        station => station.type === 'album' && station.tags.includes("Hip Hop")
    )
    const alternativeStations = spotifyStations.filter(
        station => station.type === 'album' && station.tags.includes("Alternative")
    )
    const electronicStations = spotifyStations.filter(
        station => station.type === 'album' && station.tags.includes("Electronic")
    )
    const latinStations = spotifyStations.filter(
        station => station.type === 'album' && station.tags.includes("Latin")
    )
    return (
        <section className="station-list">
            <h2 className='station-list-title'>Our Recommendations For You</h2>
            <div className='station-list-stations'>
                {recommendedStations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>
            <h2 className='station-list-title'>Rock</h2>
            <div className='station-list-stations'>
                {rockStations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>
            <h2 className='station-list-title'>Pop</h2>
            <div className='station-list-stations'>
                {popStations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>
            <h2 className='station-list-title'>Hip Hop</h2>
            <div className='station-list-stations'>
                {hipHopStations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>
            <h2 className='station-list-title'>Latin</h2>
            <div className='station-list-stations'>
                {latinStations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>
            <h2 className='station-list-title'>Alternative</h2>
            <div className='station-list-stations'>
                {alternativeStations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>
            <h2 className='station-list-title'>Electronic</h2>
            <div className='station-list-stations'>
                {electronicStations.map(station =>
                    <div key={station._id} className="station-card">
                        <StationPreview
                            station={station}
                            onSelectStation={onSelectStation} />
                    </div>
                )}
            </div>

        </section >
    )
}
