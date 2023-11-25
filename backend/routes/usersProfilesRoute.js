
const {Router} = require('express')

// controlers
const {
    getAllUsersProfiles,
    addNewUsersProfiles,
    deleteUsersProfiles,
} = require('../controllers/usersProfilesController')

// middlewares
const upload = require('../middlewares/usersProfilesMiddleware')

const router = Router()

// get all profile images
router.get('/profiles',getAllUsersProfiles)

// add new profile image 
router.post('/profiles',upload.single('profile'),addNewUsersProfiles)

// delete profile image 
router.delete('/profiles/:_id',deleteUsersProfiles)

module.exports = router