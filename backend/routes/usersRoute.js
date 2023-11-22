const {Router} = require('express')
const router = Router()

// controllers
const usersController = require('../controllers/usersController')

// login user
router.post('/login',usersController.loginUser)

// signup user
router.post('/signup',usersController.signupUser)

// logout user
router.get('/logout',usersController.logoutUser)


module.exports = router