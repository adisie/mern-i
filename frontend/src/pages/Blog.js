


import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'

import { BlogsContext } from '../contexts/BlogsContext'

import Blogs from './sub-pages/Blogs'
import NewBlogForm from './sub-pages/NewBlogForm'
import EditBlogForm from './sub-pages/EditBlogForm'

const Blog = () => {
  // contexts
  const {blogs,editFormField} = useContext(BlogsContext)
  return (
    <div className='main-blogs-container'>
      <Blogs blogs={blogs} />
      {
        editFormField._id 
        ?
        <EditBlogForm />
        :
        <NewBlogForm />
      }
      
    </div>
  )
}

export default Blog
