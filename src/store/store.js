import { legacy_createStore as createStore, combineReducers } from 'redux'
import { stationReducer } from './reducers/station.reducer.js'
import { userReducer } from './reducers/user.reducer.js'
import { youtubeReducer } from './reducers/youtube.reducer.js'
import { systemReducer } from './reducers/system.reducer.js'

const rootReducer = combineReducers({
    stationModule: stationReducer,
    userModule: userReducer,
    systemModule: systemReducer,
    youtubeModule: youtubeReducer 
    
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })