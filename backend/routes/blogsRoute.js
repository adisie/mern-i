const {Router} = require('express')
const router = Router()

// controllers
const blogsController = require('../controllers/blogsController')

// get all blogs
router.get('/',blogsController.getAllBlogs)

// add new blog
router.post('/',blogsController.addNewBlog)

// get single blog
router.get('/:_id',blogsController.getSingleBlog)

// update single blog
router.put('/:_id',blogsController.updateSingleBlog)

// delete a single blog
router.delete('/:_id',blogsController.deleteSingleBlog)

module.exports = router