import { useState } from "react"
import { useNavigate } from "react-router"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { userService } from "../services/user/user.service.remote"
import { useSelector } from "react-redux"


export function ChangePassword() {

    const [credentials, setCredentials] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.user)

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    async function onChangePassword(ev) {
        ev.preventDefault();
        if (credentials.newPassword !== credentials.confirmPassword) {
            showErrorMsg('New password and confirm password do not match');
            return
        }

        try {
            await userService.updatePassword({
                _id: user._id,
                oldPassword: credentials.oldPassword,
                newPassword: credentials.newPassword
            })
            setCredentials({
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
            })
            showSuccessMsg('Password changed successfully!')


        } catch (err) {
            const msg =
                err?.response?.data?.msg || // <-- "Incorrect old password"
                err?.message ||
                'Could not change password';
            showErrorMsg(msg);
        }
    }

    function onGoBack() {
        navigate('/settings')
    }

    return (
        <div className="settings-body">
            <h1 className="white-text">Settings</h1>
            <h2 className="white-text account-information-title">Change your password</h2>
            <form className="change-fullname-form" onSubmit={onChangePassword}>
                <input
                    type="password"
                    autoComplete="current-password"
                    name="oldPassword"
                    value={credentials.oldPassword}
                    placeholder="Old password"
                    onChange={handleChange}
                    minLength={6}
                    required
                />
                <input
                    type="password"
                    autoComplete="new-password"
                    name="newPassword"
                    value={credentials.newPassword}
                    placeholder="New password"
                    onChange={handleChange}
                    minLength={6}
                    required
                />
                <input
                    type="password"
                    autoComplete="new-password"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    placeholder="Confirm new password"
                    onChange={handleChange}
                    minLength={6}
                    required
                />
                {/* <div className="fullname-div-oninput">Full name</div> */}
                <div className="option-btns">
                    <button className="option-btn save-btn">Save</button>
                    <button className="option-btn cancel-btn" type="button" onClick={onGoBack}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
