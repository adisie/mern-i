const bcryptjs = require('bcryptjs')

// requiring user model
const User = require('../models/userModel')

// user utils
const {
    MAX_AGE,
    errorHandler,
    generateToken,
} = require('../utils/usersUtil')


// login user
const loginUser = async (req,res) => {
    const {username,password} = req.body 
    try{
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
                return res.status(200).json({
                    user: {
                        username: user.username,
                        email: user.email
                    }
                })
            }
            throw Error('Wrong Password')
        }
        throw Error('Username not exist')
    }catch(err){
        const errors = errorHandler(err)
        res.status(400).json(errors)
    }
}

// signup user
const signupUser = async (req,res) => {
    const {username,email,password} = req.body 
    try{
        const user = await User.create({username,email,password})
        const token = generateToken(user._id)
        res.cookie('auth',token,{
            maxAge: MAX_AGE * 1000,
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production'
        })
        res.status(200).json(user)
    }catch(err){
        const errors = errorHandler(err)
        res.status(200).json(
            errors
        )
    }
}

// logout user
const logoutUser = (req,res) => {
    try{
        res.cookie('auth','',{
            maxAge: 1
        })
        res.status(200).json({
            message: "LOGGED_OUT"
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