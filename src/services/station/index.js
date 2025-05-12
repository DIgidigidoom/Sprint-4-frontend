const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'
import { userService } from '../user/user.service.local'

import { stationService as local } from './station.service.local'
import { stationService as remote } from './station.service.remote'

function getEmptyStation() {
    return {
        name: 'My Playlist',
        imgUrl: '',
        songs: [],
        createdAt: Date.now(),
        owner: userService.getLoggedinUser()
    }
}

function getDefaultFilter() {
    return {
        txt: '',
    }
}

const service = (VITE_LOCAL === 'true') ? local : remote
export const stationService = { getEmptyStation, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.stationService = stationService
