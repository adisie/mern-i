const {Router} = require('express')

// controllers
const blogController = require('../controllers/blogsController')

// middlewares
const {authRequired} = require('../middlewares/authRequired')


const router = Router()

// get all blogs
router.get('/',authRequired,blogController.getAllBlogs)

// add new blog
router.post('/',authRequired,blogController.addNewBlog)

// get a single blog
router.get('/:_id',authRequired,blogController.getSingleBlog)

// update a single blog
router.put('/:_id',authRequired,blogController.updateSingleBlog)

// delete a single blog
router.delete('/:_id',authRequired,blogController.deleteSingleBlog)


module.exports = router