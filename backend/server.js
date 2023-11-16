require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// routes
const blogsRoute = require('./routes/blogsRoute')
const usersRoute = require('./routes/usersRoute')

// middlewares
const {authRequired} = require('./middlewares/authRequired')

const app = express()

// settings and middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("______CONNECTED_______")
    app.listen(process.env.PORT,()=>{
        console.log("______LISTENING_______")
    })
})
.catch(err=>{
    console.log(err)
})

app.use('/blogs',authRequired,blogsRoute)
app.use('/users',usersRoute)