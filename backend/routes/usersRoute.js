const {Router} = require('express')

// requiring controllers
const usersController = require('../controllers/usersController')

const router = Router()

// login user
router.post('/login',usersController.loginUser)

// signup user
router.post('/signup',usersController.signupUser)

// logout user
router.get('/logout',usersController.logoutUser)

module.exports = router