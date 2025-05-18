
export function getTagsList() {
  return [
    { name: 'Hip Hop', color: '#477d95', imgUrl: 'hip-hop_yed5cu' },
    { name: 'Rock', color: '#006450', imgUrl: 'rockclassics_wt0e6h' },
    { name: 'Jazz', color: '#8d67ab', imgUrl: 'jazzNchill_okhsih' },
    { name: 'Pop', color: '#477d95', imgUrl: 'pop_ddwaam' },
    { name: 'Rap', color: '#e91429', imgUrl: 'snoop_ma55tw' },
    { name: 'Relax', color: '#0d73ec', imgUrl: 'relax_hqujwh' },
    { name: 'Legends', color: '#608108', imgUrl: 'legends_xqjqq6' },
    { name: 'Workout', color: '#777', imgUrl: 'workoutboosy_gstrn6' },
    { name: 'Energy', color: '#e1118c', imgUrl: 'energy_gxatpd' },
    { name: 'Study', color: '#e61e32', imgUrl: 'study_djipj0' },
    { name: 'Classical', color: '#7d4b32', imgUrl: 'classicalcalm_v0uct2' },
    { name: 'Reggae', color: '#8c1932', imgUrl: 'ReggaeVibes_o7clhl' },
    { name: 'Chill', color: '#b06239', imgUrl: 'chill_w0p1si' },
    { name: 'EDM', color: '#af2896', imgUrl: 'EDM_jkwdke' },
    { name: 'Party', color: '#8d67ab', imgUrl: 'party_velo68' },
    { name: 'Soul', color: '#27856a', imgUrl: 'soul_nnz2s2' },
    { name: 'Smooth', color: '#537aa1', imgUrl: 'smooth_bqypbh' },
    { name: 'Piano', color: '#1e3264', imgUrl: 'piano_bs4lgl' },
    { name: 'Essential', color: '#d84000', imgUrl: 'essential_wbaljy' },
  ]
}

export function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

export function makeLorem(size = 100) {
  var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

export function randomPastTime() {
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const WEEK = 1000 * 60 * 60 * 24 * 7

  const pastTime = getRandomIntInclusive(HOUR, WEEK)
  return Date.now() - pastTime
}

export function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this, args) }, timeout)
  }
}

export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
  const data = localStorage.getItem(key)
  return (data) ? JSON.parse(data) : undefined
}

export function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function formatSpotifyDate(ms) {
  const date = new Date(ms)
  const now = new Date()

  const diffMs = now - date
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHours = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffDays === 0) {
    return diffHours < 24 ? 'Today' : 'Yesterday'
  } else if (diffDays === 1) {
    return 'Yesterday'
  } else if (diffDays < 7) {
    return `${diffDays} days ago`
  } else if (diffDays < 28) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  } else if (now.getFullYear() === date.getFullYear()) {
    // e.g., Mar 15
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  } else {
    // e.g., Oct 22, 2022
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }
}

export function getCloudinaryImg(picId) {
  const cloudinaryUrl = `https://res.cloudinary.com/dirlnkakz/image/upload/v1747039279/${picId}`
  return cloudinaryUrl
}

export function calcStationDuration(songs) {
  const duration = songs.reduce((sum, song) => sum + song.duration, 0)

  return formatDuration(duration)
}

export function darkenHexColor(hex, percent = 10) {
  const amt = Math.round(2.55 * percent)
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amt)
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amt)
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amt)

  return (
    '#' +
    [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
  )
}

