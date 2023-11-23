const fs = require('fs')

// models
const Profile = require('../models/profilesModel')

// get all profiles
const getAllProfiles = async (req,res) => {
    try {
        const profiles = await Profile.find().sort({createdAt: -1})
        res.status(200).json({profiles})
    }catch(err){
        console.log(err)
        res.status(490).json({
            message: "GET-ALL-ERROR"
        })
    }
}

// add new profile
const addNewProfile = async (req,res) => {
    try {
        const profile = await Profile.create({profile: req.file.path})
        res.status(200).json({profile})
    }catch(err){
        console.log(err)
        res.status(490).json({
            message: "POST-ERROR"
        })
    }
}

// delete profile
const deleteProfile = async (req,res) => {
    const {_id} = req.params 
    try {
        const profile = await Profile.findOneAndDelete({_id})
        if(fs.existsSync(profile.profile)){
            fs.unlink(profile.profile,err=>{
                if(err){
                    console.log(err)
                }
            })
        }
        res.status(200).json({
            message: 'DELETED'
        })
    }catch(err){
        console.log(err)
        res.status(490).json({
            message: 'DELETE-ERROR-NO-FILE-FOUND'
        })
    }
}


module.exports = {
    getAllProfiles,
    addNewProfile,
    deleteProfile,
}