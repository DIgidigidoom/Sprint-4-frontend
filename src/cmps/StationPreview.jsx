import { Link } from 'react-router-dom'

export function StationPreview({ station }) {
    const defaultImgUrl = 'https://res.cloudinary.com/deyotfuqw/image/upload/v1747039279/player_pic_g8cjbv.png'


    return (
        <div className="station-preview">
            <div className="station-img-wrapper">
                <img
                    src={station.imgUrl || defaultImgUrl}
                    alt={station.name}
                />
                <button className="btn-play">
                    <i className="fa-solid fa-play"></i>
                </button>
            </div>

            <Link to={`/station/${station._id}`} className="station-info">
                <h3>{station.name}</h3>
                <p>Playlist • {station.owner?.fullname || 'Unknown'}</p>
            </Link>
        </div>
    )
}
