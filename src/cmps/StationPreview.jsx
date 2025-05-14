import PreviewPlayBtn from '../assets/icons/play-btn-preview.svg?react'
import { getCloudinaryImg } from "../services/util.service"

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
                <span><PreviewPlayBtn /></span>
            </div>

            <div className="station-info" >
                <span className='station-preview-title'>{station.name}</span>
                <span className='station-preview-artist'>Playlist • {station.owner?.fullname || 'Unknown'}</span>
            </div>
        </div>
    )
}
