const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const blogsSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Blog',blogsSchema)