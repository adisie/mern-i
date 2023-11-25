const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersProfilesSchema = new Schema ({
    user: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
})


module.exports = mongoose.model('Profile',usersProfilesSchema)
