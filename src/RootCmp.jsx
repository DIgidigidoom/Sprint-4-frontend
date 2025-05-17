import { Routes, Route } from 'react-router'
import { AboutUs } from './pages/AboutUs.jsx'
import { StationIndex } from './pages/StationIndex.jsx'
import { StationDetails } from './pages/StationDetails.jsx'
import { UserDetails } from './pages/UserDetails.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SET_USER } from './store/reducers/user.reducer.js'
import { httpService } from './services/http.service.js'


export function RootCmp() {

    const dispatch = useDispatch()

    useEffect(() => {
  async function restoreUser() {
    try {
      const user = await httpService.get('auth/user')

      if (user && user._id) {
        dispatch({ type: SET_USER, user })
      }
    } catch (err) {
      console.log('Guest mode: no valid user found.')
    }
  }

  restoreUser()
}, [])

    return (
        <div className="main-container">
            <UserMsg />
            <Routes>
                <Route path="/" element={<StationIndex />} >
                    <Route path="station/:stationId" element={<StationDetails />} />
                </Route>
                <Route path="about" element={<AboutUs />} />

                <Route path="user/:id" element={<UserDetails />} />
                {/* <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route> */}

                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

            </Routes>


        </div>
    )
}


