import { storageService } from '../async-storage.service.js'
// import { addStation } from '../../store/actions/station.actions.js'

const USER_STORAGE_KEY = 'userDB'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    saveLoggedinUser,
}

async function getUsers() {
    const users = await storageService.query(USER_STORAGE_KEY)
    return users.map(user => {
        delete user.password
        return user
    })
}

async function getById(userId) {
    return await storageService.get(USER_STORAGE_KEY, userId)
}

function remove(userId) {
    return storageService.remove(USER_STORAGE_KEY, userId)
}

async function update(user) {
  await storageService.put(USER_STORAGE_KEY, user)

  const loggedinUser = getLoggedinUser()
  if (loggedinUser._id === user._id) {
    saveLoggedinUser(user)
  }

  return user
}

async function login(userCred) {
    const users = await storageService.query(USER_STORAGE_KEY)
    const user = users.find(user => user.username === userCred.username)

    if (user) return saveLoggedinUser(user)
}

async function signup(userCred) {
    console.log("userCred (user.service.local.js): ", userCred)
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    // const station = stationService.getEmptyStation()
    const user = await storageService.post(USER_STORAGE_KEY, userCred)
    console.log("user(user.service.local.js): 58", user)
    // addStation(station)
    return saveLoggedinUser(user)
}


async function logout() {
    sessionStorage.removeItem(USER_STORAGE_KEY)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY))
}

function saveLoggedinUser(user) {
    console.log("user(user.service.local.js) 73 before : ", user)
    user = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        isAdmin : user.isAdmin,
        likedSongsIds :user.likedSongsIds

    }
    console.log("user(user.service.local.js) 73: after ", user)
    sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    return user
}

// To quickly create an admin user, uncomment the next line
// _createAdmin()
async function _createAdmin() {
    const user = {
        username: 'admin',
        password: 'admin',
        fullname: 'Mustafa Adminsky',
        imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        score: 10000,
    }

    const newUser = await storageService.post(USER_STORAGE_KEY, userCred)
    
}
// import { storageService } from '../async-storage.service.js'
// // import { addStation } from '../../store/actions/station.actions.js'

// const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

// export const userService = {
//     login,
//     logout,
//     signup,
//     getUsers,
//     getById,
//     remove,
//     update,
//     getLoggedinUser,
//     saveLoggedinUser,
// }

// async function getUsers() {
//     const users = await storageService.query('user')
//     return users.map(user => {
//         delete user.password
//         return user
//     })
// }

// async function getById(userId) {
//     return await storageService.get('user', userId)
// }

// function remove(userId) {
//     return storageService.remove('user', userId)
// }

// async function update({ _id, score }) {
//     const user = await storageService.get('user', _id)
//     user.score = score
//     await storageService.put('user', user)

//     const loggedinUser = getLoggedinUser()
//     if (loggedinUser._id === user._id) saveLoggedinUser(user)

//     return user
// }

// async function login(userCred) {
//     const users = await storageService.query('user')
//     const user = users.find(user => user.username === userCred.username)

//     if (user) return saveLoggedinUser(user)
// }

// async function signup(userCred) {
//     if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
//     // const station = stationService.getEmptyStation()
//     const user = await storageService.post('user', userCred)
//     // addStation(station)
//     return saveLoggedinUser(user)
// }


// async function logout() {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
// }

// function getLoggedinUser() {
//     return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
// }

// function saveLoggedinUser(user) {
//     user = {
//         _id: user._id,
//         fullname: user.fullname,
//         imgUrl: user.imgUrl,
//     }
//     sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
//     return user
// }

// // To quickly create an admin user, uncomment the next line
// // _createAdmin()
// async function _createAdmin() {
//     const user = {
//         username: 'admin',
//         password: 'admin',
//         fullname: 'Mustafa Adminsky',
//         imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
//         score: 10000,
//     }

//     const newUser = await storageService.post('user', userCred)
    
// }