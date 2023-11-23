import React,{useContext} from 'react'

import { BlogsContext } from '../contexts/BlogsContext'
import Blog from './Blog'
import NewBlogForm from './NewBlogForm'

const Blogs = () => {
  // contexts 
  const {blogs} = useContext(BlogsContext)
  console.log(blogs)
  return (
    <div className='blog-gf-container'>
      <div className="sub-container">
        <Blog blogs={blogs}/>
        <NewBlogForm />
      </div>
    </div>
  )
}

export default Blogs
