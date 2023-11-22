



// login user
const loginUser = (req,res) =>{
    res.status(200).json("LOGIN")
}

// signup user
const signupUser = (req,res) => {
    res.status(200).json("SIGNUP")
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