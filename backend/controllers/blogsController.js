



// get all blogs
const getAllBlogs = (req,res) => {
    res.status(200).json("GET all blogs")
}

// add new blog
const addNewBlog = (req,res) => {
    res.status(200).json("POST new blog")
}

// get single blog
const getSingleBlog = (req,res) => {
    res.status(200).json("GET single blog")
}

// udate single blog
const updateSingleBlog = (req,res) => {
    res.status(200).json("PUT a singel blog")
}

// delete a single blog
const deleteSingleBlog = (req,res) => {
    res.status(200).json("DELETE a single blog")
}


module.exports = {
    getAllBlogs,
    addNewBlog,
    getSingleBlog,
    updateSingleBlog,
    deleteSingleBlog,
}