const jwt = require('jsonwebtoken')


// importing user model
const User = require('../models/userModel')

// auth required
const authRequired = (req,res,next) => {
    const token = req.cookies.auth 
    if(token){
        jwt.verify(token,process.env.JWT_KEY,async (err,decodedToken)=>{
            if(err){
                return res.status(401).json({
                    ERROR: "AUTH_FAILED"
                })
            }
            const user = await User.findById(decodedToken._id)
            req.user = {
                username: user.username,
                email: user.email,
            }
            next()
        })
    }else{
        return res.status(401).json({
            ERROR: "AUTH_FAILED"
        })
    }
}


module.exports = {
    authRequired,
}