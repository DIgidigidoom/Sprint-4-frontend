import axios from 'axios'
import { parse, toSeconds } from 'iso8601-duration'

const YOUTUBE_API_KEY = 'AIzaSyBc-QFw-FOHqiesLtRz1hXTJ5MpOwdMya8'

function isoDurationToSeconds(iso) {
	const durationObj = parse(iso)
	return toSeconds(durationObj)
}

export async function searchYouTube(query) {
	try {
		// Step 1: search
		const searchRes = await axios.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				part: 'snippet',
				q: query,
				type: 'video',
				maxResults: 10,
				key: YOUTUBE_API_KEY
			}
		})

		const videoIds = searchRes.data.items.map(item => item.id.videoId).join(',')

		if (!videoIds) return []

		// Step 2: fetch video details
		const detailsRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				id: videoIds,
				key: YOUTUBE_API_KEY
			}
		})

		// Step 3: normalize the data
		return detailsRes.data.items.map(item => ({
			id: item.id,
			title: item.snippet.title,
			description: item.snippet.description,
			channelTitle: item.snippet.channelTitle,
			publishedAt: new Date(item.snippet.publishedAt).getTime(),
			thumbnail: item.snippet.thumbnails.default.url,
			duration: isoDurationToSeconds(item.contentDetails.duration), 
		}))
	} catch (err) {
		console.error('Failed to search YouTube:', err)
		throw err
	}
}
