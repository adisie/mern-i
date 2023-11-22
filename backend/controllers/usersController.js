
// models
const User = require('../models/usersModel')


// login user
const loginUser = (req,res) =>{
    res.status(200).json("LOGIN")
}

// signup user
const signupUser = async (req,res) => {
    // get data from req
    const {username,phone,password} = req.body 
    try{
        const user = await User.create({username,phone,password})
        res.status(200).json({
            user: {
                username: user.username,
                phone: user.phone,
            }
        })
    }catch(err){
        res.status(490).json({
            ERROR: "SOMETHING-WRONG"
        })
    }
}

// logout user
const logoutUser = (req,res) => {
    res.status(200).json("LOGOUT")
}

module.exports = {
    loginUser,
    signupUser,
    logoutUser,
}