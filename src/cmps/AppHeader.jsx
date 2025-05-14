
import { useNavigate } from 'react-router'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import HomeIcon from '../assets/icons/home-btn.svg?react'
import MagnifyingGlassIcon from '../assets/icons/magnifying-glass.svg?react'
import SpotifyLogo from '../assets/icons/spotify-logo.svg?react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useSearchParams } from 'react-router-dom'
import { SET_STATION } from '../store/reducers/station.reducer'
import { useState, useEffect } from 'react'
import { useDebouncedYouTubeSearch } from '../customHooks/useDebouncedYouTubeSearch'





export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const youtubeResults = useSelector(storeState => storeState.youtubeModule.youtubeResults)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()
	const [searchTxt, setSearchTxt] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()
	const debouncedSearch = useDebouncedYouTubeSearch()

	useEffect(() => {
		const param = searchParams.get('search') || ''
		setSearchTxt(param)
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
		setSearchTxt('')
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
						<span className="home-btn-icon"><HomeIcon /></span>
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
								setSearchTxt(value)
								setSearchParams(value ? { search: value } : {})
							}}
						/>
					</div>
				</div>

				{!user && (
					<div className="auth-buttons">
						<button className="signup-btn">Sign up</button>
						<button className="login-btn">Log in</button>
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
