import { useState } from 'react'
import { useNavigate } from 'react-router'
import { signup } from '../store/actions/user.actions'
import { ImgUploader } from '../cmps/ImgUploader'
import { userService } from '../services/user'
import SpotifyLogo from '../assets/icons/spotify-logo.svg?react'
import Color from 'color-thief-react'
import { showErrorMsg } from '../services/event-bus.service'

export function Signup() {
    const [credentials, setCredentials] = useState(userService.getEmptyUser())
    const navigate = useNavigate()

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
    }

    function handleChange(ev) {
        const type = ev.target.type

        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    async function onSignup(ev = null) {
        try {
            if (ev) ev.preventDefault()
            console.log("credentials (signup.jsx): ", credentials)
            if (!credentials.username || !credentials.password || !credentials.fullname) return
            await signup(credentials)
            clearState()
            navigate('/')
        } catch (err) {
            const msg =
                err?.response?.data?.err || // what backend sent
                err?.message ||             // fallback to Axios error
                'Cannot signup';             // default fallback

            showErrorMsg(msg); // or setError(msg) if you're using state display
        }

    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }

    return (
        <div className='signup-form-body'>
            <div className='signup-form-container'>
                <div className='signup-logo-container'>
                    <SpotifyLogo className="signup-logo" />
                </div>
                <h1 className='signup-h1'>Sign up to start listening</h1>
                <form className="signup-form" onSubmit={onSignup}>
                    {/* <label className='signup-form-email-lable' htmlFor="email">Email address</label> */}
                    <input
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Fullname"
                        onChange={handleChange}
                        required
                    />
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
                    {/* <ImgUploader onUploaded={onUploaded} /> */}
                    <button className='signup-btn'>Signup</button>
                </form>
            </div>
        </div>


    )
}