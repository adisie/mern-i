const {Router} = require('express')

const authCheckerMiddleware = require('../middlewares/authCheckerMiddleware')

const router = Router()


router.get('/auth-check',authCheckerMiddleware,(req,res)=> {
    res.status(200).json({
        user: req.user
    })
})

module.exports = router