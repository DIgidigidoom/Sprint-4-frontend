import { userService } from '../../services/user/index.js'
import { stationService } from '../../services/station'
import { store } from '../store'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service'
import { LOADING_DONE, LOADING_START } from '../reducers/system.reducer'
import { REMOVE_USER, SET_USER, SET_USERS, SET_WATCHED_USER } from '../reducers/user.reducer'
import { makeId } from '../../services/util.service.js'
import { SET_STATION, SET_STATIONS, } from '../../store/reducers/station.reducer.js'


export async function loadUsers() {
    try {
        store.dispatch({ type: LOADING_START })
        const users = await userService.getUsers()
        store.dispatch({ type: SET_USERS, users })
    } catch (err) {
        console.log('UserActions: err in loadUsers', err)
    } finally {
        store.dispatch({ type: LOADING_DONE })
    }
}

export async function removeUser(userId) {
    try {
        await userService.remove(userId)
        store.dispatch({ type: REMOVE_USER, userId })
    } catch (err) {
        console.log('UserActions: err in removeUser', err)
    }
}

export async function login(credentials) {
    try {
        const user = await userService.login(credentials)
        store.dispatch({
            type: SET_USER,
            user
        })
        // socketService.login(user._id)
        return user
    } catch (err) {
        console.log('Cannot login', err)
        throw err
    }
}



export async function signup(credentials) {
    console.log("credentials (user.actions.js): ", credentials)
    try {
        const user = await userService.signup(credentials)
        console.log("user (user.actions.js) ", user)
        store.dispatch({ type: SET_USER, user })

        const newStation = {
            name: `Liked Songs`,
            type: 'liked station',
            tags: ['Personal'],
            createdBy: {
                _id: user._id,
                fullname: user.fullname,
                imgUrl: 'liked-songs-station-pic_wmlykl' || 'default-user-img'
            },
            likedByUsers: [],
            songs: [],
            msgs: []
        }

        await stationService.save(newStation)

        return user
    } catch (err) {
        console.log('Cannot signup', err)
        throw err
    }
}

export async function logout() {
    try {
        await userService.logout()
        store.dispatch({
            type: SET_USER,
            user: null
        })
        // socketService.logout()
    } catch (err) {
        console.log('Cannot logout', err)
        throw err
    }
}

export async function loadUser(userId) {
    try {
        const user = await userService.getById(userId)
        store.dispatch({ type: SET_WATCHED_USER, user })
    } catch (err) {
        showErrorMsg('Cannot load user')
        console.log('Cannot load user', err)
    }
}

export async function likeSongForUser(user, songId) {
    const updatedUser = await userService.addSongIdToUser(user, songId)
    store.dispatch({ type: SET_USER, user: updatedUser })
}

export async function unlikeSongForUser(user, songId) {
    const updatedUser = await userService.removeSongIdFromUser(user, songId)
    store.dispatch({ type: SET_USER, user: updatedUser })
}

export async function toggleLike(song, user, currentStation, allStations) {


    try {
        if (!user || !user._id) {
            showErrorMsg('Please log in to like songs')
            return
        }

        const userInfo = {
            _id: user._id,
            fullname: user.fullname,
            imgUrl: user.imgUrl
        }

        let updatedLikedStation
        const likedStation = allStations.find(
            s => s.isLikedSongs && s.createdBy._id === user._id
        )
        const isLiked = Array.isArray(user.likedSongsIds) && user.likedSongsIds.includes(song.id)
        if (isLiked) {
            updatedLikedStation = await stationService.removeFromLikedSongs(user._id, song.id)
        } else {
            updatedLikedStation = await stationService.addToLikedSongs(user._id, userInfo, song)
        }

        // Update the likedSongs station in Redux
        store.dispatch({ type: SET_STATION, station: updatedLikedStation })

        // If toggling in current station, also refresh its songs (if needed)
        if (currentStation._id === updatedLikedStation._id) {
            store.dispatch({ type: SET_STATION, station: updatedLikedStation })
        }

        // Update logged in user locally (optional)
        const updatedUser = await userService.toggleLikedSong(song.id)
        store.dispatch({ type: SET_USER, user: updatedUser })
        console.log('🍪 loginToken:', req.cookies?.loginToken)
        console.log('👤 decoded user:', authService.validateToken(req.cookies?.loginToken))
    } catch (err) {
        console.error('❌ toggleLike failed:', err)
        throw err
    }
}