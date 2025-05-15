import { formatDuration, formatSpotifyDate, } from '../services/util.service'
import AddLikedBtn from '../assets/icons/add-liked-btn.svg?react'
import { useSelector, useDispatch } from 'react-redux'
import ClockIcon from '../assets/icons/clock-icon.svg?react'
import { SET_STATION, SET_CURRENT_SONG, SET_CURRENT_PLAYLIST } from '../store/reducers/station.reducer'


export function StaitionSearch() {

	const youtubeResults = useSelector(storeState => storeState.youtubeModule.youtubeResults)

	const dispatch = useDispatch()

	function onSelectSong(song) {
		dispatch({ type: SET_STATION, station: null })
		dispatch({ type: SET_CURRENT_PLAYLIST, songs: [song] ,isPlaying: true })
		dispatch({ type: SET_CURRENT_SONG, song })
	}

	return (

		youtubeResults.length > 0 && (
			<div className="song-list">
				<div className='sidebar-sort-btns'>
					<button className='sidebar-playlist-btn sidebar-sort-btn'>All</button>
					<button className='sidebar-playlist-btn sidebar-sort-btn'>Playlists</button>
					<button className='sidebar-playlist-btn sidebar-sort-btn'>Songs</button>
				</div>
				<div className='list-header-container'>
					<div className="song-list-header">
						<p className="col index-header">#</p>
						<p className="col title-header">Title</p>

						<p className="col date-added-header">Date Added</p>
						<ClockIcon />
					</div>
				</div>
				{youtubeResults.map((song, idx) => (
					<div className="song-row"
						key={song.id || idx}
						index={idx}
						onClick={() => onSelectSong(song)}>
						<span className="song-index">{idx + 1}</span>
						<div className='info-wrapper'>
							<img className="song-img" src={song.imgUrl} alt="" />
							<div className="song-info">
								<p className="song-title">{song.title}</p>
								<p className="song-artist">{song.artist}</p>
							</div>
						</div>
						<p className="song-album">{song.album}</p>
						<p className="song-date-added">{formatSpotifyDate(song.addedAt)}</p>
						<div className="hovered-like-btn">
							<button onClick={(ev) => {
								ev.stopPropagation()
								onAddToLiked(ev, song.id)
							}}><AddLikedBtn /></button>
						</div>
						<p className="song-formatted-duration">{formatDuration(song.duration)}</p>

					</div>
				))
				}
			</div >
		)
	)
}