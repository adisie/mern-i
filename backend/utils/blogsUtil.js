


// error handler 
const errorHandler = err => {
    const errors = {author: '',body: ''}
    console.log(err.message)
    if(err.message.includes('Blog validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}


module.exports = {
    errorHandler
}