const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema 

const usersSchema = new Schema({
    username: {
        type: String,
        required: [true,'Username required'],
        unique: true,
    },
    phone: {
        type: String,
        required: [true,'Phone required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true,'Password required'],
        minlength: [3,'Too short password'],
    },
},{
    timestamps: true,
})

usersSchema.pre('save',function(next){
    this.password = bcryptjs.hashSync(this.password, 10)
    next()
})

module.exports = mongoose.model('User',usersSchema)