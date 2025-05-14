import { SET_YOUTUBE_RESULTS, SET_SEARCH_TEXT } from '../reducers/youtube.reducer'

// Plain action creators (no thunk, no async)
export function setYouTubeResults(results) {
  return { type: SET_YOUTUBE_RESULTS, results }
}

export function setSearchText(text) {
  return { type: SET_SEARCH_TEXT, text }
}