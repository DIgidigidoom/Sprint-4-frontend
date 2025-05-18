import { getCloudinaryImg } from '../services/util.service'
import { useNavigate } from 'react-router-dom'

export function ExplorePreview({ tag }) {
    const navigate = useNavigate()

    function onGoToTag() {
        navigate(`/?search=${encodeURIComponent(tag.name)}`)
    }

    return (
        <div
            className="tag-card-container"
            onClick={onGoToTag}>
            <article
                className="tag-card"
                style={{ backgroundColor: tag.color }}
            >
                <h3>{tag.name}</h3>
                <img src={getCloudinaryImg(tag.imgUrl)} alt={tag.name} />
            </article>
        </div>
    )
}