const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const profilesSchema = new Schema({
    profile: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})


module.exports = mongoose.model('Profile',profilesSchema)