require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// routes
const usersRoute = require('./routes/usersRoute')
const authCheckerRoute = require('./routes/authCheckerRoute')


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
    console.log('CONNECTED')
    app.listen(process.env.PORT,()=>{
        console.log("LSITENING")
    })
})
.catch(err=>{
    console.log(err)
})

// setting routes
app.use('/users',usersRoute)
app.use('/users',authCheckerRoute)