const bcryptjs = require('bcryptjs')
// models
const User = require('../models/usersModel')

// utils
const {
    MAX_AGE,
    errorHandler,
    generateToken,
} = require('../utils/usersUtil')


// login user
const loginUser = async (req,res) =>{
    // get data from request body
    const {username,password} = req.body
    try {
        const user = await User.findOne({username})
        if(user){
            const isPassMatch = bcryptjs.compareSync(password,user.password)
            if(isPassMatch){
                // generate token
                const token = generateToken(user._id)
                // set cookie
                res.cookie('auth',token,{
                    httpOnly: true,
                    sameSite: 'lax',
                    maxAge: MAX_AGE * 1000,
                    secure: process.env.NODE_ENV === 'production'
                })
                res.status(200).json({
                    user: {
                        username: user.username,
                        phone: user.phone,
                    }
                })
                return
            }else {
                throw Error("Wrong password")
            }
        }else {
            throw Error("Username not exist")
        }
    }catch(err){
        const errors = errorHandler(err)
        res.status(401).json({errors})
    }
}

// signup user
const signupUser = async (req,res) => {
    // get data from req
    const {username,phone,password} = req.body 
    try{
        const user = await User.create({username,phone,password})
        // generate token
        const token = generateToken(user._id)
        // set cookie
        res.cookie('auth',token,{
            httpOnly: true,
            maxAge: MAX_AGE * 1000,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production'
        })

        res.status(200).json({
            user: {
                username: user.username,
                phone: user.phone,
            }
        })
    }catch(err){
        const errors = errorHandler(err)
        res.status(490).json({
            errors
        })
    }
}

// logout user
const logoutUser = (req,res) => {
    try{
        res.cookie('auth','',{maxAge: 1})
        res.status(200).json({
            message: "LOGOUT"
        })
    }catch(err){
        res.status(490).json({
            ERROR: "SOMETHING_WRONG"
        })
    }
    
}

module.exports = {
    loginUser,
    signupUser,
    logoutUser,
}