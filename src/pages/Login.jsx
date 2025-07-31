import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { userService } from '../services/user'
import { login } from '../store/actions/user.actions'
import SpotifyLogo from '../assets/icons/spotify-logo.svg?react'
import { showErrorMsg } from '../services/event-bus.service'

export function Login() {
    const [users, setUsers] = useState([])
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })

    const navigate = useNavigate()

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    async function onLogin(ev) {
        if (ev) ev.preventDefault();
        if (!credentials.username) return;

        try {
            const user = await login(credentials);

            if (!user) {
                console.log('Login failed: No user returned');
                // Show error to user if needed:
                setError('Invalid credentials');
                return;
            }

            navigate('/');
        } catch (err) {
            console.error('Login error:', err);

            // Get the custom error message from the backend, if available
            const msg =
                err?.response?.data?.err || // what backend sent
                err?.message ||             // fallback to Axios error
                'Cannot login';             // default fallback

            showErrorMsg(msg); // or setError(msg) if you're using state display
        }
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function handleCheckboxChange(ev) {
        const value = ev.target.checked
        value ? setCredentials({ username: 'DemoUser', password: 'DemoUser' }) : setCredentials({ username: '', password: '' })
    }

    return (
        <div className='login-form-body'>
            <div className='login-form-container'>
                <div className='login-logo-container'>
                    <SpotifyLogo className="login-logo" />
                </div>
                <h1 className='login-h1'>Log in to Stupify</h1>
                <form className="login-form" onSubmit={onLogin}>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <label className='demo-user-lable'>
                        <span className='demo-user-span'>Demo User</span>
                        <input type="checkbox" name="demo-user" id="demo-user" className='demo-user-input' onChange={handleCheckboxChange} />
                    </label>
                    {/* <ImgUploader onUploaded={onUploaded} /> */}
                    <button className='login-btn'>Log in</button>
                </form>
            </div>
        </div>
    )
}