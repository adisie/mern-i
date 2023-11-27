

import React,{useContext} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// icons
import { BsHandThumbsUpFill } from "react-icons/bs"
import { FaMessage } from "react-icons/fa6"
import { AiFillEdit } from "react-icons/ai"
import { MdDelete } from "react-icons/md"

// default profile pictures
import defaultAuthorProfile from '../assets/images/default-profiles/male-profile-2.jpg'

// contexts
import { BlogsContext } from '../contexts/BlogsContext'
import { AuthContext } from '../contexts/AuthContext'

const Blog = ({blog}) => {

    // contexts
    const {deleteBlog} = useContext(BlogsContext)
    const {user} = useContext(AuthContext)

  return (
        <div className="post">
            <div className="content">
            <p>
                {blog.body}
            </p>
            {
                user && user.username === blog.author 
                ?
                <div className="controllers">
                    <button className='post-controll-btn'><AiFillEdit /></button>
                    <button className='post-controll-btn' onClick={()=>deleteBlog(blog._id)}><MdDelete /></button>
                </div>
                :
                <></>
            }
            </div>
            <div className="author-detail-container">
            <div className="author-img-name">
                {
                    blog.profile 
                    ?
                    <img src={`http://localhost:3080/${blog.profile}`} alt="author-profile-image" />
                    :
                    <img src={defaultAuthorProfile} alt="author-profile-image" />
                }
                <span>{blog.author}</span>
            </div>
            <div className="post-reaction-controllers">
                <button className='post-reaction-btn'><BsHandThumbsUpFill /></button>
                <button className='post-reaction-btn'><FaMessage /></button>
                <span>{formatDistanceToNow(new Date(blog.createdAt),{addSuffix: true})}</span>
            </div>
            </div>
        </div>  
  )
}

export default Blog
