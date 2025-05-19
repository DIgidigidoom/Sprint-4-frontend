import { httpService } from './http.service.js'

export async function getLyrics(title, artist) {
  try {
    const { lyrics } = await httpService.get('lyrics', { title, artist })
    return lyrics
  } catch {
    return 'Lyrics not available.'
  }
}
