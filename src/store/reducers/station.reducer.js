export const SET_STATIONS = 'SET_STATIONS'
export const SET_STATION = 'SET_STATION'
export const REMOVE_STATION = 'REMOVE_STATION'
export const ADD_STATION = 'ADD_STATION'
export const UPDATE_STATION = 'UPDATE_STATION'
export const SET_NEXT_SONG = 'SET_NEXT_SONG'
export const SET_PREV_SONG = 'SET_PREV_SONG'
export const SET_IS_PLAYING = 'SET_IS_PLAYING'
export const SET_SONG_IDX = 'SET_SONG_IDX'
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'
export const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST'
export const SET_LYRICS_CACHE = 'SET_LYRICS_CACHE'

const initialState = {
    stations: [],
    station: null,
    currentSongIdx: 0,
    isPlaying: false,
    currentSong: null,
    SET_CURRENT_PLAYLIST: [],
    lyricsCache: {}
}

export function stationReducer(state = initialState, action) {
    var newState = state
    var stations
    switch (action.type) {
        case SET_STATIONS:
            newState = { ...state, stations: action.stations }
            break
        case SET_STATION:
            newState = { ...state, station: action.station }
            break
        case REMOVE_STATION:
            const lastRemovedStation = state.stations.find(station => station._id === action.stationId)
            stations = state.stations.filter(station => station._id !== action.stationId)
            newState = { ...state, stations, lastRemovedStation }
            break
        case ADD_STATION:
            newState = { ...state, stations: [...state.stations, action.station] }
            break
        case UPDATE_STATION:
            stations = state.stations.map(station => (station._id === action.station._id) ? action.station : station)
            newState = { ...state, stations }
            break

        case SET_CURRENT_SONG:
            newState = {
                ...state,
                currentSong: action.song,
                isPlaying: typeof action.isPlaying === 'boolean' ? action.isPlaying : state.isPlaying
            }
            break

        case SET_CURRENT_PLAYLIST:
            newState = { ...state, currentPlaylist: action.songs }
            break

        case SET_IS_PLAYING:
            newState = { ...state, isPlaying: action.isPlaying }
            break

        case SET_NEXT_SONG: {
            const playlist = state.currentPlaylist
            const currentIdx = playlist.findIndex(song => song.id === state.currentSong?.id)

            if (currentIdx === -1 || currentIdx === playlist.length - 1) return state
            const nextSong = playlist[currentIdx + 1]

            return {
                ...state,
                currentSong: nextSong,
                isPlaying: true,
            }
        }

        case SET_PREV_SONG: {
            const playlist = state.currentPlaylist
            const currentIdx = playlist.findIndex(song => song.id === state.currentSong?.id)

            if (currentIdx <= 0) return state
            const prevSong = playlist[currentIdx - 1]

            return {
                ...state,
                currentSong: prevSong,
                isPlaying: true,
            }
        }


        case SET_LYRICS_CACHE:
            return {
                ...state,
                lyricsCache: {
                    ...state.lyricsCache,
                    [action.cacheKey]: action.lyrics
                }
            }
    }
    return newState
}

// unitTestReducer()

function unitTestReducer() {
    var state = initialState
    const station1 = { _id: 'b101', vendor: 'Station ' + parseInt('' + Math.random() * 10), speed: 12, owner: null, msgs: [] }
    const station2 = { _id: 'b102', vendor: 'Station ' + parseInt('' + Math.random() * 10), speed: 13, owner: null, msgs: [] }

    state = stationReducer(state, { type: SET_STATIONS, stations: [station1] })
    console.log('After SET_STATIONS:', state)

    state = stationReducer(state, { type: ADD_STATION, station: station2 })
    console.log('After ADD_STATION:', state)

    state = stationReducer(state, { type: UPDATE_STATION, station: { ...station2, vendor: 'Good' } })
    console.log('After UPDATE_STATION:', state)

    state = stationReducer(state, { type: REMOVE_STATION, stationId: station2._id })
    console.log('After REMOVE_STATION:', state)

    state = stationReducer(state, { type: SET_STATION, station: station1 })
    console.log('After SET_STATION:', state)

    const msg = { id: 'm' + parseInt('' + Math.random() * 100), txt: 'Some msg', by: { _id: 'u123', fullname: 'test' } }
    state = stationReducer(state, { type: ADD_STATION_MSG, stationId: station1._id, msg })
    console.log('After ADD_STATION_MSG:', state)
}

