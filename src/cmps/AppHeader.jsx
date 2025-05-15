import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useSearchParams } from 'react-router-dom'
import { SET_STATION } from '../store/reducers/station.reducer'
import { useEffect } from 'react'
import { useDebouncedYouTubeSearch } from '../customHooks/useDebouncedYouTubeSearch'
import { setSearchText } from '../store/actions/youtube.actions'
import { SET_YOUTUBE_RESULTS } from '../store/reducers/youtube.reducer.js'
import { useNavigate } from 'react-router'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import HomeIcon from '../assets/icons/home-btn.svg?react'
import HomeIconEmpty from '../assets/icons/homepage-no-fill.svg?react'
import MagnifyingGlassIcon from '../assets/icons/magnifying-glass.svg?react'
import SpotifyLogo from '../assets/icons/spotify-logo.svg?react'






export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const searchTxt = useSelector(storeState => storeState.youtubeModule.searchText)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()
	const [searchParams, setSearchParams] = useSearchParams()
	const debouncedSearch = useDebouncedYouTubeSearch()


	useEffect(() => {
		const param = searchParams.get('search') || ''

		setSearchText(param)
	}, [])

	useEffect(() => {
		debouncedSearch(searchTxt)
		return () => debouncedSearch.cancel()
	}, [searchTxt])

	async function onLogout() {
		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	function onGoHome() {
		dispatch(setSearchText(''))
		dispatch({ type: SET_YOUTUBE_RESULTS, results: [] })
		setSearchParams('')
		dispatch({ type: SET_STATION, station: null })
		if (location.pathname !== '/') {
			navigate('/')
		}
	}


	return (

		<header className="app-header full">
			<nav>
				<button className="logo" onClick={onGoHome}>
					<SpotifyLogo className="logo-icon" />
				</button>

				<div className="middle-header">
					<button className="home-btn" onClick={onGoHome}>
						{location.pathname === '/' ? <span className="home-btn-icon"><HomeIcon /> </span> : <span className="home-btn-icon"> <HomeIconEmpty /> </span>}
					</button>

					<div className="search-wrapper">

						<span className='magnifying-glass-header-filter'><MagnifyingGlassIcon /></span>

						<input
							type="text"
							className="header-filter"
							placeholder="What do you want to play?"
							value={searchTxt}
							onChange={(ev) => {
								const value = ev.target.value
								dispatch(setSearchText(value))
								if (value) {
									navigate(`/?search=${encodeURIComponent(value)}`)
									
								} else {
									navigate('/')
								}
							}}
						/>
					</div>
				</div>

				{!user && (
					<div className="auth-buttons">

						<Link to={`signup`}>
							<button className="signup-btn">Sign up</button>
						</Link>

						<Link to={`login`}>
							<button className="login-btn">Log in</button>
						</Link>

					</div>
				)}
				{user && (
					<div className="user-info">
						<Link to={`user/${user._id}`}>{user.fullname}</Link>
						<button onClick={onLogout}>Logout</button>
					</div>
				)}

			</nav>
		</header>

	)
}
