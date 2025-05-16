import { useState, useRef, useEffect } from 'react'
import { updateStation } from '../store/actions/station.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import ModalX from '../assets/icons/sidebar-input-x.svg?react'
import EditPen from '../assets/icons/edit-pic-pen.svg?react'
import { getCloudinaryImg } from '../services/util.service'
import { useDispatch, useSelector } from 'react-redux'
import { SET_STATION } from '../store/reducers/station.reducer'

export function EditStationModal({ onClose }) {
  const station = useSelector(storeState => storeState.stationModule.station)
  const stationName = station.name
  const stationImg = station.createdBy.imgUrl
  const dispatch = useDispatch()

  const [name, setName] = useState(stationName || '')
  const [previewImg, setPreviewImg] = useState(getCloudinaryImg(stationImg))
  const [imageFile, setImageFile] = useState(null)
  const fileInputRef = useRef(null)




  async function onSave(ev) {
    ev.preventDefault()

    let imgUrl = station.createdBy.imgUrl
    if (imageFile) {
      imgUrl = await uploadImage(imageFile)
    }

    const stationToSave = {
      ...station,
      name,
      createdBy: { ...station.createdBy, imgUrl }
    }

    try {
      await updateStation(stationToSave)
      dispatch({ type: SET_STATION, station: stationToSave })
      showSuccessMsg('Station updated successfully')
      onClose(stationToSave)
    } catch (err) {
      console.error('Failed to update station', err)
      showErrorMsg('Could not update station')
    }
  }


  function handleChoosePhotoClick() {
    fileInputRef.current?.click()
  }

  async function uploadImage(file) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'spotify_cloudinary') // replace with your Cloudinary preset

    const res = await fetch('https://api.cloudinary.com/v1_1/dirlnkakz/image/upload', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    console.log('data.secure_url: ',data.secure_url)
    console.log('test url:', extractPicId(data.secure_url))
    return extractPicId(data.secure_url) // this is the URL you save
  }

  function extractPicId(url) {
  const match = url.match(/\/([^/]+\.(jpg|png))$/i)
  return match ? match[1] : null
}


  function handleFileChange(ev) {
    const file = ev.target.files[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImg(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="modal-overlay">
      <div className="edit-station-modal">
        <div className='modal-header'>
          <h2>Edit details</h2>
          <button className='modal-close-btn' onClick={onClose}>
            <ModalX />
          </button>

        </div>

        <div className='modal-body'>

          <div className='middle-modal'>
            <div className='img-container'>
              <img src={previewImg} alt={station.name} onClick={handleChoosePhotoClick} />

              <div className='edit-pic-container'>
                <EditPen />
                <span>Choose photo</span>
              </div>
              {/* 🆕 hidden file input */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            <div className='modal-inputs-container'>
              <div className='title-input-wrapper'>
                <input type="text" className='title-input' placeholder='Add a name' value={name} onChange={(e) => setName(e.target.value)} required />
                <span className='title-input-span'>Name</span>
              </div>
              <div className='description-input-wrapper'>
                <textarea type="text" className='description-input' placeholder='Add an optional description' />
                <span className='description-input-span'>Description</span>
              </div>
            </div>
          </div>

          <div className='modal-save-btn-container'>
            <span className='modal-save-btn' onClick={onSave}>Save</span>
          </div>

          <div className='spotify-terms-warning-container'>
            <p className='spotify-terms-warning'>
              By proceeding,
              you agree to give Spotify access to the image you choose to upload.
              Please make sure you have the right to upload the image.
            </p>
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