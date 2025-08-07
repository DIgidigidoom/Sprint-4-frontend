import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { userService } from "../services/user/user.service.remote"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { SET_USER } from "../store/reducers/user.reducer"



export function EditFullName() {
    const user = useSelector(storeState => storeState.userModule.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            setCredentials({ fullname: user.fullname })
        }
    }, [user])
    // const [credentials, setCredentials] = useState({ fullname: user.fullname })
    const [credentials, setCredentials] = useState(() => ({
        fullname: user?.fullname || ''
    }));
    const navigate = useNavigate()

    async function onChangeFullName(ev) {
        ev.preventDefault();
        console.log('credentials: ', credentials)
        const updatedUser = {
            _id: user._id,
            fullname: credentials.fullname
        }
        // userService.update(updatedUser)
        try {
            const savedUser = await userService.update(updatedUser)
            navigate('/settings')
            dispatch({ type: 'SET_USER', user: savedUser })
            showSuccessMsg(`Full name changed to ${credentials.fullname}!`)

        } catch (error) {
            showErrorMsg('could not change full name')
        }

    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onGoBack() {
        navigate('/settings')
    }

    if (!user) return <div>Loading...</div>
    return (
        <>
            {user && (
                <div className="settings-body">
                    <h1 className="white-text">Settings</h1>
                    <h2 className="white-text account-information-title">Enter your full name</h2>
                    <form className="change-fullname-form" onSubmit={onChangeFullName}>
                        <input
                            type="text"
                            autoComplete="off"
                            name="fullname"
                            value={credentials.fullname}
                            placeholder="Full Name"
                            onChange={handleChange}
                            required
                        />
                        <div className="fullname-div-oninput">Full name</div>
                        <div className="option-btns">
                            <button className="option-btn save-btn">Save</button>
                            <button className="option-btn cancel-btn" type="button" onClick={onGoBack}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </>

    )
}
