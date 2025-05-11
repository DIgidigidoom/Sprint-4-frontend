import { Link } from 'react-router-dom'

export function StationPreview({ station }) {
    return (
        <div>Station Preview <Link to={`/station/${station._id}`}> Details </Link> </div>

    )
}