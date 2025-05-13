import { Link } from 'react-router-dom'
import {getCloudinaryImg} from "../services/util.service"

export function StationPreview({ station, onSelectStation }) {
    const defaultImgUrl = 'https://res.cloudinary.com/deyotfuqw/image/upload/v1747039279/player_pic_g8cjbv.png'
    const { createdBy } = station
    
    return (
        <div className="station-preview" onClick={() => onSelectStation(station._id)}>
            <div className="station-img-wrapper">
                <img
                    src={getCloudinaryImg(createdBy.imgUrl) || defaultImgUrl}
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
