const { DEV, VITE_LOCAL } = import.meta.env

import { stationService as local } from './station.service.local'
import { stationService as remote } from './station.service.remote'

function getEmptyStation() {
    return {
        name: '',
        createdBy: {
            imgUrl: '',
            fullname:''
        },
        songs: [],
        createdAt: '',
        owner:''
    }
}

function getDefaultFilter() {
    return {
        txt: '',
    }
}

const service = (VITE_LOCAL === 'true') ? local : remote
export const stationService = { getEmptyStation, getDefaultFilter, ...service }

if (DEV) window.stationService = stationService
