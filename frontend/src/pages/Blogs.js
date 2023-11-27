

import React,{useContext} from 'react'

// contexts
import { BlogsContext } from '../contexts/BlogsContext'

// pages
import Blog from './Blog'

const Blogs = () => {
    // contexts
    const {blogs} = useContext(BlogsContext)
  return (
        <div className="posts-container">
            {
                blogs.length 
                ?
                blogs.map(blog=>{
                    return (
                        <Blog key={blog._id} blog={blog} />
                    )
                })
                :
                <>
                <h3>No Blog</h3>
                </>
            }
        </div>  
  )
}

export default Blogs
