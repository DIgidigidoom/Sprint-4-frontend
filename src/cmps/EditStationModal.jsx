import { useState } from 'react'
import { updateStation } from '../store/actions/station.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import ModalX from '../assets/icons/sidebar-input-x.svg?react'

export function EditStationModal({ station, onClose }) {
  // const [name, setName] = useState(station.name || '')

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
        <div className='modal-header'>
          <h2>Edit details</h2>
          <ModalX />
        </div>

        <div className='modal-body'>

          <div className='middle-modal'>
            <div className='img-container'>
              <img src="https://i.ytimg.com/vi/TLDflhhdPCg/mqdefault.jpg" alt="" />
            </div>

            <div className='modal-inputs-container'>
              <input type="text" className='title-input' />
              <input type="text" className='description-input' />
            </div>

          </div>

          <div className='modal-save-btn-container'>
            <span className='modal-save-btn'>Save</span>
          </div>






          {/* <form onSubmit={onSave}>
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
        </form> */}
        </div>

      </div>
    </section>
  )
}
