



// get all blogs
const getAllBlogs = (req,res) => {
    res.status(200).json({
        message: 'GET all blogs',
        user: req.user
    })
}

// add new blog
const addNewBlog = (req,res) => {
    res.status(200).json({
        message: "POST new blog",
        user: req.user
    })
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
const deleteSingleBlog = (req,res) => {
    res.status(200).json({
        message: "DELETE a single blog",
        user: req.user
    })
}


module.exports = {
    getAllBlogs,
    addNewBlog,
    getSingleBlog,
    updateSingleBlog,
    deleteSingleBlog,
}