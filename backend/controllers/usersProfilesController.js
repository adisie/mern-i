const fs = require('fs')
// models
const Profile = require('../models/usersProfilesModel')


// get all profiles
const getAllUsersProfiles = async (req,res) => {
    try{
        const profiles = await Profile.find({author: req.user.username}).sort({createdAt: -1})
        res.status(200).json({
            profiles
        })
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: 'GET all profile error'
        })
    }
}

// add new profiles
const addNewUsersProfiles = async (req,res) => {
    try {
        const profile = await Profile.create({
            author: req.user.username,
            profile: req.file.path
        })
        res.status(200).json({
            profile
        })
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: 'POST profile error'
        })
    }
}

// delete a profile
const deleteUsersProfiles = async (req,res) => {
    try {
        const profile = await Profile.findByIdAndDelete({_id: req.params._id})
        const file_path = profile.profile
        if(fs.existsSync(file_path)){
            fs.unlinkSync(file_path)
        }
        res.status(200).json({
            message: "DELETED"
        })
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: "DELETE profile error"
        })
    }
} 



module.exports = {
    getAllUsersProfiles,
    addNewUsersProfiles,
    deleteUsersProfiles,
}