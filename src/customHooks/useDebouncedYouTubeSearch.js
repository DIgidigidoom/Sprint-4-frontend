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
            const cleanQuery = query.trim()
            if (!cleanQuery) {
                dispatch({ type: SET_YOUTUBE_RESULTS, results: [] })
                return
            }

            // Load the full cache object
            const cacheStr = localStorage.getItem('yt-search-cache')
            const cache = cacheStr ? JSON.parse(cacheStr) : {}

            // Return cached results if found
            if (cache[cleanQuery]) {
                dispatch({ type: SET_YOUTUBE_RESULTS, results: cache[cleanQuery] })
                return
            }

            // Else fetch and cache
            try {
                const results = await searchYouTube(cleanQuery)
                dispatch({ type: SET_YOUTUBE_RESULTS, results })

                // Update cache and save back to localStorage
                cache[cleanQuery] = results
                localStorage.setItem('yt-search-cache', JSON.stringify(cache))
            } catch {
                showErrorMsg('YouTube search failed')
            }
        }, delay),
        []
    )

    return debouncedSearch
}
