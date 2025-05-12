import { Link } from 'react-router-dom'

export function StationPreview({ station, onSelectStation }) {
    const defaultImgUrl = 'https://res.cloudinary.com/deyotfuqw/image/upload/v1747039279/player_pic_g8cjbv.png'


    return (
        <div className="station-preview" onClick={() => onSelectStation(station._id)}>
            <div className="station-img-wrapper">
                <img
                    src={station.imgUrl || defaultImgUrl}
                    alt={station.name}
                />
                <button className="btn-play"
                    onClick={(ev) => {
                        ev.stopPropagation()
                        console.log('▶️ Play clicked!')
                    }}>
                    <i className="fa-solid fa-play"></i>
                </button>
            </div>

            <div className="station-info" >
                <h3>{station.name}</h3>
                <p>Playlist • {station.owner?.fullname || 'Unknown'}</p>
            </div>
        </div>
    )
}
