import { useState } from "react"
import { useSelector } from "react-redux"


export function EditFullName() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [credentials, setCredentials] = useState({ fullname: '' })

    function onChangeFullName() {
        console.log('!')
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    return (
        <>
            {user && (
                <div className="settings-body">
                    <h1 className="white-text">Settings</h1>
                    <h2 className="white-text account-information-title">Enter your full name</h2>
                    <form className="change-fullname-form" onSubmit={onChangeFullName}>
                        <input
                            type="text"
                            name="fullname"
                            value={user.fullname}
                            placeholder="Full Name"
                            onChange={handleChange}
                            required
                        />
                    </form>
                </div>
            )}
        </>

    )
}
