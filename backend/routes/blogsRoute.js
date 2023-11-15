const {Router} = require('express')

// controllers
const blogController = require('../controllers/blogsController')


const router = Router()

// get all blogs
router.get('/',blogController.getAllBlogs)

// add new blog
router.post('/',blogController.addNewBlog)

// get a single blog
router.get('/:_id',blogController.getSingleBlog)

// update a single blog
router.put('/:_id',blogController.updateSingleBlog)

// delete a single blog
router.delete('/:_id',blogController.deleteSingleBlog)


module.exports = router