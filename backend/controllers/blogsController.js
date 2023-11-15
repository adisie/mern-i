


// get all blogs 
const getAllBlogs = (req,res) => {
    res.status(200).json({
        message: "GET all blogs",
        user: req.user
    })
}

// add new blog
const addNewBlog = (req,res) => {
    res.status(200).json({
        message: "POST new blog"
    })
}

//get single blog
const getSingleBlog = (req,res) => {
    res.status(200).json({
        message: "GET a single blog",
        _id: req.params._id
    })
}

// update a blog
const updateSingleBlog = (req,res) => {
    res.status(200).json({
        message: "UPDATE a single blog",
        _id: req.params._id
    })
}

// delete a single blog
const deleteSingleBlog = (req,res) => {
    res.status(200).json({
        message: "DELETE a single blog",
        _id: req.params._id,
    })
}

module.exports = {
    getAllBlogs,
    addNewBlog,
    getSingleBlog,
    updateSingleBlog,
    deleteSingleBlog,
}