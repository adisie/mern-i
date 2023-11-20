const jwt = require('jsonwebtoken')

// max age
const MAX_AGE = 60 * 21

// custom error
const errorHandler = err => {
    const errors = {username: '',email: '',password: ''}

    if(err.message === 'Username not exist'){
        errors.username = 'Username not exist'
    }

    if(err.message === 'Wrong Password'){
        errors.password = 'Wrong Password'
    }

    if(err.code === 11000){
        if(err.message.includes('username')){
            errors.username = 'Username already exist'
        }

        if(err.message.includes('email')){
            errors.email = "Email already exist"
        }
    }

    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}

// generate token
const generateToken = _id => {
    return jwt.sign({_id},process.env.JWT_KEY,{
        expiresIn: MAX_AGE
    })
}


module.exports = {
    MAX_AGE,
    errorHandler,
    generateToken,
}