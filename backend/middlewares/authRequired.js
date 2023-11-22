const jwt = require('jsonwebtoken')

// models
const User = require('../models/usersModel')


const authRequired = (req,res,next) => {
    //get the token from the cookie
    const token = req.cookies.auth 
    if(token){
        jwt.verify(token,process.env.JWT_KEY,async (err,decodedToken)=>{
            if(err){
                return res.status(401).json({
                    ERROR: "AUTH_FAILED"
                })
            }else {
                const user = await User.findById(decodedToken._id)
                req.user = {username: user.username,phone: user.phone}
                next()
            }
        })
    }else {
        return res.status(401).json({
            ERROR: "AUTH_FAILED"
        })
    }
    
}


module.exports = {
    authRequired,
}