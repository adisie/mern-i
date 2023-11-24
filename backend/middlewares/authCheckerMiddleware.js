
const jwt = require('jsonwebtoken')
const User = require('../models/usersModel')

const authCheckerMiddleware = (req,res,next) => {
    const token = req.cookies.auth 
    if(token){
        jwt.verify(token,process.env.JWT_KEY,async (err,decodedToken)=>{
            if(err){
                return res.status(401).json({
                    ERROR: "AUTH-FAILED"
                })
            }else {
                const user = await User.findById(decodedToken._id)
                req.user = {
                    username: user.username,
                    phone: user.phone
                }
                next()
            }
        })
    }else {
        return res.status(401).json({
            ERROR: "AUTH-FAILED"
        })
    }
}

module.exports = authCheckerMiddleware