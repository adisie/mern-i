

import React,{useContext} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { AiFillEdit } from "react-icons/ai"
import { MdDelete } from "react-icons/md"

import { AuthContext } from '../../contexts/AuthContext'
import { BlogsContext } from '../../contexts/BlogsContext'

import authorProfile from '../../assets/images/male-profile-2.jpg'

const SingleBlog = ({blog}) => {
  const {user} = useContext(AuthContext)
  const {deleteSingleBlog,editSingleBlog} = useContext(BlogsContext)
  return (
    <div className='blog'>
      <p>
        {blog.body}
        {
          blog.author === user.username
          ?
          <span className="par-cotroll">
            <button onClick={()=>editSingleBlog(blog)}><AiFillEdit /></button>
            <button onClick={()=>deleteSingleBlog(blog._id)}><MdDelete /></button>
        </span>
        :
        <span></span>
        }
      </p>
      <div className="author-detail">
        <div className='author-image-username-container'>
        <img src={authorProfile} /> <span>{blog.author}</span>
        </div>
        <div className='date-container'><span>{formatDistanceToNow(new Date(blog.createdAt),{addSuffix: true})}</span></div>
      </div>
    </div>
  )
}

export default SingleBlog
