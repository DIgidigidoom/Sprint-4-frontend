import { stationService } from '../../services/station/station.service.local.js'
import { store } from '../store.js'
import { ADD_STATION, REMOVE_STATION, SET_STATIONS, SET_STATION, UPDATE_STATION, SET_NEXT_SONG, SET_PREV_SONG, SET_IS_PLAYING } from '../reducers/station.reducer.js'




export async function loadStations(filterBy) {
    try {
        const stations = await stationService.query(filterBy)
        store.dispatch(getCmdSetStations(stations))
    } catch (err) {
        console.log('Cannot load stations', err)
        throw err
    }
}

export async function loadStation(stationId) {
    try {
        const station = await stationService.getById(stationId)
        console.log('🟢 Loaded station:', station)
        store.dispatch(getCmdSetStation(station))
    } catch (err) {
        console.log('Cannot load station', err)
        throw err
    }
}




export async function removeStation(stationId) {
    try {
        await stationService.remove(stationId)
        store.dispatch(getCmdRemoveStation(stationId))
    } catch (err) {
        console.log('Cannot remove station', err)
        throw err
    }
}

export async function addStation(station) {
    try {
        const savedStation = await stationService.save(station)
        store.dispatch(getCmdAddStation(savedStation))
        return savedStation
    } catch (err) {
        console.log('Cannot add station', err)
        throw err
    }
}

export async function updateStation(station) {
    try {
        const savedStation = await stationService.save(station)
        store.dispatch(getCmdUpdateStation(savedStation))
        return savedStation
    } catch (err) {
        console.log('Cannot save station', err)
        throw err
    }
}
// Media Player

export function setIsPlaying(isPlaying) {
    return {
        type: SET_IS_PLAYING,
        isPlaying
    }
}

export function setCurrentStation(station) {
    return { type: SET_STATION, station }
}

export function setNextSong() {
    return {
        type: SET_NEXT_SONG
    }
}

export function setPrevSong() {
    return {
        type: SET_PREV_SONG
    }
}

// songs
export async function addSong(stationId, song) {
    try {
        const updatedStation = await stationService.addSongToStation(stationId, song)
        store.dispatch(getCmdUpdateStation(updatedStation))
    } catch (err) {
        console.error('Cannot add song', err)
        throw err
    }
}

export async function removeSong(stationId, songId) {
    try {
        const updatedStation = await stationService.removeSongFromStation(stationId, songId)
        store.dispatch(getCmdUpdateStation(updatedStation))
    } catch (err) {
        console.error('Cannot remove song', err)
        throw err
    }
}

export async function addToLiked(stationId, songId) {
  console.log("addToLiked songId: ", songId)
  console.log("addToLiked stationId: ", stationId)

  try {
    const updatedStation = await stationService.addToLikedSongs(stationId, songId)

    const state = store.getState()
    const existing = state.stationModule.stations.find(s => s._id === updatedStation._id)

    const action = existing
      ? getCmdUpdateStation(updatedStation)
      : getCmdAddStation(updatedStation)

    store.dispatch(action)

    return updatedStation
  } catch (err) {
    console.error('Cannot add to Liked Songs', err)
    throw err
  }
}

export async function removeFromLiked(songId) {
    try {
        const updatedStation = await stationService.removeFromLikedSongs(songId)
        store.dispatch(getCmdUpdateStation(updatedStation))
        return updatedStation
    } catch (err) {
        console.error('Cannot remove from Liked Songs', err)
        throw err
    }
}


// Command Creators:
function getCmdSetStations(stations) {
    return {
        type: SET_STATIONS,
        stations
    }
}

function getCmdSetStation(station) {
    return {
        type: SET_STATION,
        station
    }
}

function getCmdRemoveStation(stationId) {
    return {
        type: REMOVE_STATION,
        stationId
    }
}

function getCmdAddStation(station) {
    return {
        type: ADD_STATION,
        station
    }
}

function getCmdUpdateStation(station) {
    return {
        type: UPDATE_STATION,
        station
    }
}

// // unitTestActions()
// async function unitTestActions() {
//     await loadStations()
//     await addStation(stationService.getEmptyStation())
//     await updateStation({
//         _id: 'm1oC7',
//         vendor: 'Station-Good',
//     })
//     await removeStation('m1oC7')
//     // TODO unit test addStationMsg
// }
