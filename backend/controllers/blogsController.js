

// models
const Blog = require('../models/blogsModel')

// get all blogs
const getAllBlogs = async (req,res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: -1})
        res.status(200).json({blogs})
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: "GET-ERROR"
        })
    }
}

// add new blog
const addNewBlog = async (req,res) => {
    const {body} = req.body 
    try {
        const blog = await Blog.create({author: req.user.username,body})
        res.status(200).json({blog})
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: "POST-ERROR",
        })
    }
}

// get single blog
const getSingleBlog = (req,res) => {
    res.status(200).json({
        message: "GET single blog",
        user: req.user
    })
}

// udate single blog
const updateSingleBlog = (req,res) => {
    res.status(200).json({
        message: "UPDATE a blog",
        user: req.user
    })
}

// delete a single blog
const deleteSingleBlog = async (req,res) => {
    const {_id} = req.params 
    try {
        const blog = await Blog.findOneAndDelete({_id})
        res.status(200).json({
            message: "DELETED"
        })
    }catch(err){
        console.log(err)
        res.status(490).json({
            ERROR: "DELETE-ERROR"
        })
    }
}


module.exports = {
    getAllBlogs,
    addNewBlog,
    getSingleBlog,
    updateSingleBlog,
    deleteSingleBlog,
}