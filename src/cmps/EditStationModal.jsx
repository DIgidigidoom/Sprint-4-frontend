import { useState } from 'react'
import { updateStation } from '../store/actions/station.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'

export function EditStationModal({ station, onClose }) {
  const [name, setName] = useState(station.name || '')

  async function onSave(ev) {
    ev.preventDefault()
    const stationToSave = { ...station, name }

    try {
      await updateStation(stationToSave)
      showSuccessMsg('Station updated successfully')
      onClose()
    } catch (err) {
      console.error('Failed to update station', err)
      showErrorMsg('Could not update station')
    }
  }

  return (
    <section className="modal-overlay">
      <div className="edit-station-modal">
        <h2>Edit Station</h2>
        <form onSubmit={onSave}>
          <label>Station Name:</label>
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder="Enter station name"
          />
          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  )
}
