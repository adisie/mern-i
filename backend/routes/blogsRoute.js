const {Router} = require('express')
const router = Router()

// conrollers
const {
    getAllBlogs,
    addNewBlog,
    deleteBlog,
} = require('../controllers/blogsController')

// middlewares
const authCheckerMiddleware = require('../middlewares/authCheckerMiddleware')

// get all blogs
router.get('/',getAllBlogs)

// add new blog
router.post('/',authCheckerMiddleware,addNewBlog)

// delete blog
router.delete('/:_id',authCheckerMiddleware,deleteBlog)

module.exports = router