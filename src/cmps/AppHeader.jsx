import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import HomeIcon from '../assets/icons/home-btn.svg?react'
import MagnifyingGlassIcon from '../assets/icons/magnifying-glass.svg?react'

import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { SET_STATION } from '../store/reducers/station.reducer'


export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()


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
		dispatch({ type: SET_STATION, station: null })
		if (location.pathname !== '/') {
			navigate('/')
		}
	}


	return (
		<header className="app-header full">
			<nav>
				<button className="logo" onClick={onGoHome}>
					<FontAwesomeIcon icon={faSpotify} className="logo-icon" />
				</button>


				<div className="middle-header">
					<button className="home-btn" onClick={onGoHome}>
						<span className="home-btn-icon"><HomeIcon /></span>
					</button>


					<div className="search-wrapper">

						<span className='magnifying-glass-header-filter'><MagnifyingGlassIcon /></span>
						{/* <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifying-glass-header-filter" /> */}
						<input
							type="text"
							className="header-filter"
							placeholder="What do you want to play?"
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
