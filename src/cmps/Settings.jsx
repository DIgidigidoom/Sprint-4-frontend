import { useSelector } from "react-redux"
import PersonLogo from '../assets/icons/person-logo.svg?react'
import EditDetailsLogo from '../assets/icons/edit-details-logo.svg?react'
import MailLogo from '../assets/icons/mail-logo.svg?react'
import LockLogo from '../assets/icons/lock-logo.svg?react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { EditFullName } from "./EditFullName"

export function Settings() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    const [isEditName, setIsEditName] = useState(false)
    console.log(user)

    function onEditFullName() {
        navigate('settings/edit-fullname')
    }

    function onChangePassword() {
        navigate('settings/change-password')
    }

    return (
        <>
        {user && (
            <div className="settings-body">
            <h1 className="white-text">Settings</h1>
            <h2 className="white-text account-information-title">Account information</h2>
            <div className="settings-info-wrapper">
                <div className="settings-info-inner-wrapper">
                    <PersonLogo className="settings-logo" />
                    <span className="white-text settings-user-option">Full Name</span>
                </div>
                <button onClick={onEditFullName} className="edit-details-btn">
                    <EditDetailsLogo />
                </button>
            </div>
            <div className="settings-info-wrapper">
                <div className="settings-info-inner-wrapper">
                    <MailLogo className="settings-logo" />
                    <div className="settings-user-info-wrapper">
                        <span className="white-text settings-user-option">Email</span>
                        <span className="white-text settings-user-hidden">example@mail.com</span>
                    </div>
                </div>
                <button className="edit-details-btn">
                    <EditDetailsLogo />
                </button>
            </div>
            <div className="settings-info-wrapper">
                <div className="settings-info-inner-wrapper">
                    <LockLogo className="settings-logo" />
                    <div className="settings-user-info-wrapper">
                        <span className="white-text settings-user-option">Password</span>
                        <span className="white-text settings-user-hidden">********</span>
                    </div>
                </div>
                <button onClick={onChangePassword} className="edit-details-btn">
                    <EditDetailsLogo />
                </button>
            </div>
        </div>
        )}
        </>
    )
}
