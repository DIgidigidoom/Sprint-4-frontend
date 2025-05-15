export const SET_YOUTUBE_RESULTS = 'SET_YOUTUBE_RESULTS'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

// Initial State
const initialState = {
  youtubeResults: [],
  searchText: ''
}

// Reducer
export function youtubeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YOUTUBE_RESULTS:
      return { ...state, youtubeResults: action.results }
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.text }
    default:
      return state
  }
}