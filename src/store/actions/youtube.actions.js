import { searchYouTube } from '../../services/youtube.service'
import { SET_YOUTUBE_RESULTS } from '../reducers/youtube.reducer'

export function loadYouTubeResults(query) {
	return async dispatch => {
		try {
			const results = await searchYouTube(query)
			dispatch({ type: SET_YOUTUBE_RESULTS, results })
		} catch (err) {
			console.error('YouTube search failed:', err)
			throw err
		}
	}
}