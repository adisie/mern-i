const jwt = require('jsonwebtoken')

// users model
const User = require('../models/usersModel')

const authRequired = (req,res,next) => {
    const token = req.cookies.auth 
    if(token){
        jwt.verify(token,process.env.JWT_KEY,async (err,decodedToken)=>{
            if(err){
                return res.status(401).json({
                    error: "TOKEN_EXPIRED"
                })
            }
            const user = await User.findOne({_id: decodedToken._id},{username: 1,email: 1,_id: 0})
            req.user = user
            next()
        })
        
    }else{
        return res.status(401).json({
            error: "AUTH_FAILED"
        })
    }
}

module.exports = {
    authRequired,
}