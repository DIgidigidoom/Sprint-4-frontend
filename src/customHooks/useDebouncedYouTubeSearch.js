import { useCallback } from 'react'
import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'
import { searchYouTube } from '../services/youtube.service'
import { SET_YOUTUBE_RESULTS } from '../store/reducers/youtube.reducer'
import { showErrorMsg } from '../services/event-bus.service'

export function useDebouncedYouTubeSearch(delay = 400) {
	const dispatch = useDispatch()

	const debouncedSearch = useCallback(
		debounce(async (query) => {
			if (!query.trim()) return dispatch({ type: SET_YOUTUBE_RESULTS, results: [] })
			try {
				const results = await searchYouTube(query)
				dispatch({ type: SET_YOUTUBE_RESULTS, results })
			} catch {
				showErrorMsg('YouTube search failed')
			}
		}, delay),
		[]
	)

	return debouncedSearch
}
