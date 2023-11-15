const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true,'Username required'],
        unique: true,
    },
    email: {
        type: String,
        required: [true,'Email address rquired'],
        unique: true,
        validate: [isEmail,'Invalid emaill address'],
    },
    password: {
        type: String,
        required: [true,'Password required'],
        minlength: [3,'Too short password']
    },
},{
    timestamps: true
})

userSchema.pre('save',function(next){
    this.password = bcryptjs.hashSync(this.password,10)
    next()
})

module.exports = mongoose.model('User',userSchema);