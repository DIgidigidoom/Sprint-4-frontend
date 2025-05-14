export const SET_YOUTUBE_RESULTS = 'SET_YOUTUBE_RESULTS'

const initialState = {
	youtubeResults: []
}

export function youtubeReducer(state = initialState, action) {
	switch (action.type) {
		case SET_YOUTUBE_RESULTS:
			return { ...state, youtubeResults: action.results }
		default:
			return state
	}
}
