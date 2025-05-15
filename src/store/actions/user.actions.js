import { userService } from '../../services/user/index.js'
import { stationService } from '../../services/station/station.service.local'
import { store } from '../store'

import { showErrorMsg } from '../../services/event-bus.service'
import { LOADING_DONE, LOADING_START } from '../reducers/system.reducer'
import { REMOVE_USER, SET_USER, SET_USERS, SET_WATCHED_USER } from '../reducers/user.reducer'
import { makeId } from '../../services/util.service.js'


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
                imgUrl: user.imgUrl || 'default-user-img'
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

export async function addSongToLiked(user, songId) {
  try {
    // Prevent duplicates
    if (user.likedSongsIds.includes(songId)) return

    const updatedUser = {
      ...user,
      likedSongsIds: [...user.likedSongsIds, songId]
    }

    await userService.update(updatedUser)
    store.dispatch({ type: SET_USER, user: updatedUser })
  } catch (err) {
    console.error('user.actions -> Cannot add to liked', err)
    throw err
  }
}