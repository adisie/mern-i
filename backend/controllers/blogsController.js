
// models
const Blog = require('../models/blogsModel')
const Profile = require('../models/usersProfilesModel')

// get all blogs 
const getAllBlogs = async (req,res) => {
    try{
        const blogs = await Blog.find().sort({createdAt: -1})
        res.status(200).json({blogs})
    }catch(err){
        console.log(err)
        res.status(409).json({
            ERROR: "GET all blogs error"
        })
    }
}

// add new blog
const addNewBlog = async (req,res) => {
    try{
        const {body} = req.body 
        const profile = await Profile.find({user: req.user.username}).sort({createdAt: -1})
        const profile_path = profile[0].profile ? profile[0].profile :  '' 
        const blog = await Blog.create({
            author: req.user.username,
            profile: profile_path,
            body
        }) 

        res.status(200).json({blog})

    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: 'POST blog error'
        })
    }
}

// delete blog
const deleteBlog = async (req,res) => {
    const {_id} = req.params 
    try {
        await Blog.findOneAndDelete({_id})
        res.status(200).json({
            message: "BLOG-DELETED"
        })
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: "DELETE blog error"
        })
    }
}


module.exports = {
    getAllBlogs,
    addNewBlog,
    deleteBlog,
}