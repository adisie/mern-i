

// requiring models
const Blog = require('../models/blogModel')
const {errorHandler} = require('../utils/blogsUtil')

// get all blogs
const getAllBlogs = async (req,res) => {
    try {
        const blogs = await Blog.find().sort({createdAt: -1})
        res.status(200).json({user: req.user,blogs})
    }catch(err){
        res.status(400).json(err)
    }
}


// add new blog
const addNewBlog = async (req,res) => {
    // get data from req
    const {author,body} = req.body
    try {
        const newBlog = await Blog.create({author,body})
        res.status(200).json({user: req.user,newBlog})

    }catch(err){
        const errors = errorHandler(err)
        console.log(err.message)
        res.status(400).json(errors)
    }
}

// GET a single blog
const getSingleBlog = async (req,res) => {
    // get _id 
    const {_id} = req.params
    try {
        const blog = await Blog.findById({_id})
        res.status(200).json({user: req.user,blog})
    }catch(err){
        res.status(400).json({
            ERROR: "BLOG_NOT_FOUND"
        })
    }

}

// UPDATE a single blog
const updateSingleBlog = async (req,res) => {
    //get _id 
    const {_id} = req.params
    try{
        // update here
        const updatedBlog = await Blog.findOneAndUpdate({_id},req.body)
        const blog = await Blog.findById({_id})

        res.status(200).json({user: req.user,blog})
    }catch(err){
        console.log(err)
        res.status(400).json({
            ERROR: "BLOG_NOT_FOUND"
        })
    }

}

// DELETE a single blog
const deleteSingleBlog = async (req,res) => {
    // get _id
    const {_id} = req.params
    try {
        const blog = await Blog.findOneAndDelete({_id})
        res.status(200).json({user: req.user,blog})
    }catch(err){
        console.log(err)
        res.status(200).json({
            ERROR: "BLOG_NOT_FOUND"
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