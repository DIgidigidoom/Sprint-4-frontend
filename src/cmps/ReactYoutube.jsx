import YouTube from 'react-youtube'

export function ReactYouTube({ videoId, onReady }) {
  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
    },
  }

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />
}