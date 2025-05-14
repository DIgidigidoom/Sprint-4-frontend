import { Routes, Route } from 'react-router'
import { AboutUs } from './pages/AboutUs.jsx'
import { StationIndex } from './pages/StationIndex.jsx'
import { StationDetails } from './pages/StationDetails.jsx'
import { UserDetails } from './pages/UserDetails.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'


export function RootCmp() {
    return (
        <div className="main-container">

            <UserMsg />


            <Routes>
                <Route path="/" element={<StationIndex />} >
                    <Route path="station/:stationId" element={<StationDetails />} />
                </Route>
                <Route path="about" element={<AboutUs />} />

                <Route path="user/:id" element={<UserDetails />} />
                <Route path="login" element={<LoginSignup />}>
                    <Route index element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>

            </Routes>


        </div>
    )
}


