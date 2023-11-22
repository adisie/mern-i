require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// routes
const usersRoute = require('./routes/usersRoute')
const blogsRoute = require('./routes/blogsRoute')
const profilesRoute = require('./routes/profilesRoute')

// midlewares
const {
    authRequired,
} = require('./middlewares/authRequired')

const app = express()


// settings and middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))
app.use(cors({
    origin: true,
    credentials: true
}))

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
app.use('/blogs',authRequired,blogsRoute)
app.use('/users',authRequired,profilesRoute)

