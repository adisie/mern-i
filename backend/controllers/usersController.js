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
const loginUser = async (req,res) => {
    // get data from req.body
    const {username,password} = req.body

    try {
        const user = await User.findOne({username})
        if(user){
            const isPassMatch = bcryptjs.compareSync(password,user.password)
            if(isPassMatch){
                const token = generateToken(user._id)
                res.cookie('auth',token,{
                    maxAge: MAX_AGE * 1000,
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: process.env.NODE_ENV === 'production'
                })
                
                res.status(200).json({
                    user: {
                        username: user.username,
                        phone: user.phone
                    }
                })

                return
            }
            throw Error('Wrong password')
        }
        throw Error('Username not exist')
    }catch(err){
        const errors = errorHandler(err)
        res.status(401).json({errors})
    }
}

// signup user
const signupUser = async (req,res) => {
    // get data from req.body
    const {username,phone,password} = req.body 
    try {
        const user = await User.create({username,phone,password})
        const token = generateToken(user._id)
        res.cookie('auth',token,{
            maxAge: MAX_AGE * 1000,
            httpOnly: true,
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
        res.status(401).json({errors})
    }
}

// logout user
const logoutUser = (req,res) => {
    try {
        res.cookie('auth','',{maxAge: 1})
        res.status(200).json({
            message: "LOGGED-OUT"
        })
    }catch(err){
        console.log(err)
        res.status(401).json({
            ERROR: "LOGOUT-ERROR",
        })
    }
}


module.exports = {
    loginUser,
    signupUser,
    logoutUser,
}