require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// routes
const profilesRoute = require('./routes/profilesRoute')

const app = express()

// settings and middleawares
app.use(express.json())
app.use(cors({
  origin: true,
  credentials: true,
}))
app.use('/public',express.static('public'))

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

app.use('/users',profilesRoute)

