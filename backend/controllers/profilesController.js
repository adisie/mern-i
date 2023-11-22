
const Profile = require('../models/profilesModel')

// get all profiles
const getAllProfiles = (req,res) => {
    res.status(200).json({
        message: 'GET all profiles',
    })
}


// add new profile
const addNewProfile = (req,res) => {
    // get data 
    const {user} = req.body 
    const {profile} = req.file 
    res.status(200).json({
        message: "Here we go"
    })
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
const deleteSingleProfile = (req,res) => {
    res.status(200).json({
        message: "DELETE a single profile"
    })
}

module.exports = {
    getAllProfiles,
    addNewProfile,
    getSingleProfile,
    updateSingleProfile,
    deleteSingleProfile,
}