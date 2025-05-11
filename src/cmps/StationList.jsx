
import { StationPreview } from './StationPreview.jsx'

export function StationList({ stations, onRemoveStation, onUpdateStation }) {
    

    return <section>
        <ul className="list">
            {stations.map(station =>
                <li key={station._id}>
                    <StationPreview station={station}/>
                </li>)
            }
        </ul>
    </section>
}