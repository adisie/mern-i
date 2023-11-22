require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// routes
const usersRoute = require('./routes/usersRoute')
const blogsRoute = require('./routes/blogsRoute')

const app = express()

// connect to the data base
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("CONNECTED")
    app.listen(process.env.PORT,()=>{
        console.log("LISTENING")
    })
})
.catch(err=>{
    console.log(err)
})

// setting routes
app.use('/users',usersRoute)
app.use('/blogs',blogsRoute)

