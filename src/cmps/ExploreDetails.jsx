import { useSelector } from 'react-redux'
import { getTagsList, getCloudinaryImg } from '../services/util.service'
import { useNavigate } from 'react-router-dom'
import PreviewPlayBtn from '../assets/icons/play-btn-preview.svg?react'

export function ExploreDetails({ tag }) {
    const stations = useSelector(storeState => storeState.stationModule.stations)
    const tagInfo = getTagsList().find(t => t.name === tag)
    const bgColor = tagInfo?.color || '#333'
    const navigate = useNavigate()

    const filteredStations = stations.filter(station =>
        Array.isArray(station.tags) && station.tags.includes(tag)
    )

    function onSelectStation(stationId) {
        navigate(`/station/${stationId}`)
    }


    return (
        <section className="explore-details">
            <header
                className="explore-header"
                style={{ background: `linear-gradient(to bottom, ${bgColor}, #121212)` }}>
                <h1 className="tag-title">{tag}</h1>
            </header>

            <h2 className="section-title">All Things {tag}</h2>

            <div className="station-grid">
                {filteredStations.map(station => (
                    <div className='station-card-container'>
                        <div
                            key={station._id}
                            className="station-card"
                            onClick={() => onSelectStation(station._id)}>

                            <div className='station-img-wrapper'>
                                <img
                                    src={getCloudinaryImg(station.createdBy.imgUrl)}
                                    alt={station.name}
                                />
                                <span className='preview-play-btn'><PreviewPlayBtn /></span>
                            </div>
                            <h3>{station.name}</h3>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}
