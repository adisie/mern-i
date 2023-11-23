
const fs = require('fs')
const Profile = require('../models/profilesModel')

// get all profiles
const getAllProfiles = async (req,res) => {
    try {
        const profiles = await Profile.find({user: req.user.username}).sort({createdAt: -1})
        res.status(200).json({
            user: req.user,
            profiles
        })
    }catch(err){
        console.log(errr)
        res.status(490).json({
            message: 'Something wrong'
        })
    }
}


// add new profile
const addNewProfile = async (req,res) => {
    try{
        const profile = await Profile.create({user: req.user.username,profile: req.file.path})
        res.status(200).json({
            user: req.user,
            profile
        })

    }catch(err){
        res.status(490).json({
            message: "SOMETHING WRONG"
        })
    }
}

// get single profile 
const getSingleProfile = (req,res) => {
    res.status(200).json({
        message: "GET a single profile",
    })
}

// update a single profile
const updateSingleProfile = (req,res) => {
    res.status(200).json({
        message: "UPDATE a single profile"
    })
}

// delete a single profile
const deleteSingleProfile = async (req,res) => {
    const {_id} = req.params 
    try{
        const profile = await Profile.findOneAndDelete({_id})
        const path = profile.profile 
        if(fs.existsSync(path)){
            fs.unlink(path,err=>{
                if(err){
                    console.log(err)
                }
                return res.status(200).json({
                    message: "DELETED",
                    profile
                })
            })
        }
        
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: "SOMETHING-WRONG"
        })
    }
}

module.exports = {
    getAllProfiles,
    addNewProfile,
    getSingleProfile,
    updateSingleProfile,
    deleteSingleProfile,
}