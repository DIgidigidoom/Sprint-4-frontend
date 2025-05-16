
import { storageService } from '../async-storage.service.js'
import { makeId } from '../util.service.js'
import { seedStationsToLocalStorage } from './station.seed.js'
import { demoSongs } from './demo-songs.js'
import { attachSongIdToUser, removeFromLiked } from '../../store/actions/station.actions.js'
import { userService } from '../user/index.js'

const STORAGE_KEY = 'stationDB'

seedStationsToLocalStorage()

export const stationService = {
    query,
    getById,
    save,
    remove,
    likeSongForUserStation,
    removeSongFromLikedStation,
    addSongToLikedStation

}
window.cs = stationService



async function query(filterBy = { txt: '' }) {
    var stations = await storageService.query(STORAGE_KEY)
    const { txt } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stations = stations.filter(station => regex.test(station.name) || regex.test(station.description))
    }
    return stations
}

function getById(stationId) {
    return storageService.get(STORAGE_KEY, stationId)
}

async function remove(stationId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, stationId)
}

async function save(station) {
    console.log("station (save in service): ", station)

    let savedStation

    if (station.type === 'liked station') {
        if (station._id) savedStation = await storageService.put(STORAGE_KEY, { ...station })
        else savedStation = await storageService.post(STORAGE_KEY, station)
    } else {
        if (station._id) {
            savedStation = await storageService.put(STORAGE_KEY, { ...station })
        }
        else {
            let stations = await query()
            const { fullname, _id } = userService.getLoggedinUser()
            const length = stations.filter(station => station.createdBy._id === _id).length


            const stationToSave = {
                _id: makeId(4),
                type: 'user playlist',
                name: 'My Playlist #' + (length),
                createdBy: {
                    imgUrl: 'defaultstation_ov5qip',
                    fullname: fullname,
                    _id: _id
                },
                songs: [],
                createdAt: Date.now(),
            }


            savedStation = await storageService.post(STORAGE_KEY, stationToSave)
        }
    }
    return savedStation
}

export async function likeSongForUserStation(station, song) {
    if (station.songs.find(s => s.id === song.id)) {
        throw new Error('Song already exists in station')
    }
    station.songs.push(song)
    return save(station)
}

export async function removeSongFromLikedStation(station, songId) {
    station.songs = station.songs.filter(song => song.id !== songId)
    return save(station)
}

export async function addSongToLikedStation(station, song) {
  if (!station.songs) station.songs = []

  const alreadyExists = station.songs.some(s => s.id === song.id)
  if (alreadyExists) throw new Error('Song already exists in Liked Songs')

  station.songs.push(song)
  return save(station)
}



// for console
window.stationService = stationService
window.demoSongs = demoSongs
window.attachSongIdToUser = attachSongIdToUser
window.removeFromLiked = removeFromLiked



