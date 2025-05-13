
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import { seedStationsToLocalStorage } from './station.seed.js'

const STORAGE_KEY = 'stationDB'

seedStationsToLocalStorage()

export const stationService = {
    query,
    getById,
    save,
    remove,
    addSongToStation,
    removeSongFromStation

}
window.cs = stationService

const loggedinUser = {
    _id: 'u101',
    fullname: 'Hadar Sabag'
}

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
    var savedStation
    if (station._id) {
        savedStation = await storageService.put(STORAGE_KEY, { ...station })
    } else {
        const stationToSave = {
            _id: makeId(4),
            name: station.name || 'My Playlist',
            imgUrl: station.imgUrl || 'https://res.cloudinary.com/deyotfuqw/image/upload/v1747039279/player_pic_g8cjbv.png',
            songs: station.songs || [],
            createdAt: Date.now(),
            // owner: userService.getLoggedinUser(),
            owner: loggedinUser

        }
        savedStation = await storageService.post(STORAGE_KEY, stationToSave)
    }
    return savedStation
}

export async function addSongToStation(stationId, songId) {
    const station = await getById(stationId)
    if (!station.owner || station.owner._id !== loggedinUser._id) {
        throw new Error('Not your station')
    }
    const song = demoSongs.find(song => song.id === songId)
    if (!song) throw new Error('Song not found')

    station.songs.push(song)
    return save(station)
}

export async function removeSongFromStation(stationId, songId) {
    const station = await getById(stationId)
    if (!station.owner || station.owner._id !== loggedinUser._id) {
        throw new Error('Not your station')
    }

    station.songs = station.songs.filter(song => song.id !== songId)
    return save(station)
}


import { demoSongs } from './demo-songs.js'
window.stationService = stationService
window.demoSongs = demoSongs



