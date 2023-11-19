const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    author: {
        type: String,
        required: [true,"Author is required field"],
    },
    body: {
        type: String,
        required: [true,"Body is required field"]
    },
},{
    timestamps: true
})

module.exports = mongoose.model("Blog",blogSchema)