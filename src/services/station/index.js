const { DEV, VITE_LOCAL } = import.meta.env

import { stationService as local } from './station.service.local'
import { stationService as remote } from './station.service.remote'

function getEmptyStation() {
    return {
        name: '',
        type: '',
        createdBy: {
            _id: '',
            imgUrl: '',
            fullname: ''
        },
        songs: [],
        createdAt: '',

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
