const {Router} = require('express')

// controllers
const {
    loginUser,
    signupUser,
    logoutUser,
} = require('../controllers/usersController')

const router = Router()

// login user
router.post('/login',loginUser)

// signup user
router.post('/signup',signupUser)

// logout user
router.get('/logout',logoutUser)

module.exports = router