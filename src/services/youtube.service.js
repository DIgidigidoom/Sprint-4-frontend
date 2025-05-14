import axios from 'axios'

const API_KEY = 'AIzaSyBc-QFw-FOHqiesLtRz1hXTJ5MpOwdMya8'
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

export async function searchYouTube(query) {
	try {
		const { data } = await axios.get(BASE_URL, {
			params: {
				part: 'snippet',
				q: query,
				key: API_KEY,
				maxResults: 5,
				type: 'video',
			},
		})
		return data.items.map(item => ({
			id: item.id.videoId,
			title: item.snippet.title,
			thumbnail: item.snippet.thumbnails.default.url,
			channelTitle: item.snippet.channelTitle,
		}))
	} catch (err) {
		console.error('YouTube API error:', err)
		throw err
	}
}