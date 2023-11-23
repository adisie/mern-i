



import React from 'react'
import SingleBlog from './SingleBlog'

const Blog = ({blogs}) => {
  return (
    <div className="blogs-container">
        {
            blogs.map(blog=>{
                return (
                    <SingleBlog key={blog._id} blog={blog} />
                )
            })
        }
    </div>
  )
}

export default Blog
