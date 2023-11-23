const {Router} = require('express')

// controllers
const profilesController = require('../controllers/profilesController')

// middlewares
const upload = require('../middlewares/profileMiddleware')

const router = Router()

// get all profiles
router.get('/profiles',profilesController.getAllProfiles)

// add new profile
router.post('/profiles',upload.single('profile'),profilesController.addNewProfile)

// delete profile
router.delete('/profiles/:_id',profilesController.deleteProfile)

module.exports = router