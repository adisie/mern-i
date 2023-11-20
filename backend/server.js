require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// requiring routes and middlewares
const blogsRoute = require('./routes/blogsRoute')
const usersRoute = require('./routes/usersRoute')
const {authRequired} = require('./middlewares/authRequired')

const app = express()

// settings and middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true,
}))

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

// paths
app.use('/blogs',authRequired,blogsRoute)
app.use('/users',usersRoute)
