const {Router} = require('express')

//controllers
const usersController = require('../controllers/usersConroller')

const router = Router()

// login user
router.post('/login',usersController.loginUser)

// signup user
router.post('/signup',usersController.signupUser)

module.exports = router