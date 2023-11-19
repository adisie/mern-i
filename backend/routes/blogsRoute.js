const {Router} = require('express')

// requiring controllers
const blogsController = require('../controllers/blogsController')

const router = Router()

// get all blogs
router.get('/',blogsController.getAllBlogs)


// add new blog
router.post('/',blogsController.addNewBlog)

// get a single blog
router.get('/:_id',blogsController.getSingleBlog)

// update a single blog
router.put('/:_id',blogsController.updateSingleBlog)

// delete a single blog
router.delete('/:_id',blogsController.deleteSingleBlog)

module.exports = router