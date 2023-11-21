

import React from 'react'

import SingleBlog from './SingleBlog'

const Blogs = ({blogs}) => {
  return (
    <div className='blogs-container'>
      {blogs.map(blog=>{
        return (
            <SingleBlog key={blog._id} blog={blog}/>
        )
      })}
    </div>
  )
}

export default Blogs
