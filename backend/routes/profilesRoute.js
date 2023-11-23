
const {Router} = require('express')


// controllers
const profilesController = require('../controllers/profilesController')


// middlewares
const {
    upload
} = require('../middlewares/profilesMiddleware')

const router = Router()

// get all profiles
router.get('/profiles',profilesController.getAllProfiles)

// add new profile
router.post('/profiles',upload.single('profile'),profilesController.addNewProfile)

// get single profile
router.get('/profiles/:_id',profilesController.getSingleProfile)

// update single profile
router.put('/profiles/:_id',profilesController.updateSingleProfile)

// delete single profile
router.delete('/profiles/:_id',profilesController.deleteSingleProfile)

module.exports = router