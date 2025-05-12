import { StationPreview } from './StationPreview.jsx'

export function StationList({ stations, onRemoveStation, onUpdateStation }) {
    return (
        <section className="station-grid">
            {stations.map(station =>
                <div key={station._id} className="station-card">
                    <StationPreview station={station} />

                    <div className="station-actions">
                        <button onClick={() => onUpdateStation(station)} title="Edit">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>

                        <button onClick={() => onRemoveStation(station._id)} title="Delete">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
