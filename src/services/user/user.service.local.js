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
    addSongIdToUser,
    removeSongIdFromUser
}

async function getUsers() {
    const users = await storageService.query(USER_STORAGE_KEY)
    return users.map(user => {
        delete user.password
        return user
    })
}

export async function addSongIdToUser(user, songId) {
    if (!user.likedSongsIds.includes(songId)) {
        user.likedSongsIds.push(songId)
        return update(user)
    } else {
        throw new Error('Song already liked by user')
    }
}
export async function removeSongIdFromUser(user, songId) {
    user.likedSongsIds = user.likedSongsIds.filter(id => id !== songId)
    return update(user)
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
        isAdmin: user.isAdmin,
        likedSongsIds: user.likedSongsIds

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
