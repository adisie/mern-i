const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcryptjs = require('bcryptjs')

const userSchema = new Schema({
    username: {
        type: String,
        required: [true,'Username required'],
        unique: true,
    },
    phone: {
        type: String,
        required: [true,"Phone no required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true,'Password required'],
        minlength: [3,'Too short password']
    },
},{
    timestamps: true,
})

userSchema.pre('save',function(next){
    this.password = bcryptjs.hashSync(this.password,10)
    next()
})

module.exports = mongoose.model("User",userSchema)