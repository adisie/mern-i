const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    user: {
        type: String,
        required: [true,'User required'],
    },
    profile: {
        type: String,
        required: [true,'Profile required'],
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Profile',profileSchema)