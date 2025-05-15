
import { storageService } from '../async-storage.service.js'
import { makeId } from '../util.service.js'
import { seedStationsToLocalStorage } from './station.seed.js'
import { demoSongs } from './demo-songs.js'
import { addToLiked, removeFromLiked } from '../../store/actions/station.actions.js'
import { userService } from '../user/index.js'

const STORAGE_KEY = 'stationDB'

seedStationsToLocalStorage()

export const stationService = {
    query,
    getById,
    save,
    remove,
    addSongToStation,
    removeSongFromStation,
    addToLikedSongs,
    removeFromLikedSongs,
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
        else savedStation = await storageService.post(STORAGE_KEY,  station )
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
                type:'user playlist',
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


export async function addSongToStation(stationId, songId) {
    const station = await getById(stationId)
    const { songs } = station
    if (!station.owner || station.owner._id !== loggedinUser._id) {
        throw new Error('Not your station')
    }
    const song = songs.find(song => song.id === songId)
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

export async function addToLikedSongs(station, song) {
    const { songs } = station

    if(songs.find(likedSong=> likedSong.id === song.id))  throw new Error('Song is already in liked songs')

    station.songs.push(song)
    
    // const song = songs.find(song => song.id === songId)

    


    return save(station)
}

export async function removeFromLikedSongs(songId) {
    let stations = await query()

    const likedStation = stations.find(station =>
        station.isLikedSongs && station.owner?._id === loggedinUser._id
    )

    if (!likedStation) throw new Error('Liked Songs station not found')

    likedStation.songs = likedStation.songs.filter(song => song.id !== songId)

    return save(likedStation)
}

// for console
window.stationService = stationService
window.demoSongs = demoSongs
window.addToLiked = addToLiked
window.removeFromLiked = removeFromLiked



