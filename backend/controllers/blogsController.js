
// models
const Blog = require('../models/blogsModel')

// get all blogs 
const getAllBlogs = async (req,res) => {
    try{
        const blogs = await Blog.aggregate([
            {
                $lookup: {
                    from: 'profiles',
                    localField: 'author',
                    foreignField: 'author',
                    as: 'profile',
                }
            }, 
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: 'username',
                    as: 'author'
                }
            },
            {
                $project: {
                    body: 1,
                    createdAt: 1,
                    author: {
                        $arrayElemAt: ["$author.username",0]
                    },
                    profile: {
                        $arrayElemAt: ["$profile.profile",-1]
                    }
                }
            },
            {
                $sort: {
                    createdAt: -1
                }
            }

        ])
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
        const blog = await Blog.create({
            author: req.user.username,
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