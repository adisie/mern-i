


import React,{useContext} from 'react'
import authorProfileImage from '../assets/images/male-profile-2.jpg'
import { MdDelete } from "react-icons/md"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { BlogsContext } from '../contexts/BlogsContext'
import { AuthContext } from '../contexts/AuthContext'

const SingleBlog = ({blog}) => {
    // contexts
    const {deleteBlog} = useContext(BlogsContext)
    const {user} = useContext(AuthContext)
  return (
    <div className="single-blog">
        <p>
            {blog.body}
        </p>
        <div className="user-controller">
            <div className="profile">
                <img src={authorProfileImage} alt="auhor image" />
                <span>{blog.author}</span>
            </div>
            <div className="control">
                {
                    user.username === blog.author
                    ?
                    <button onClick={()=>deleteBlog(blog._id)}><MdDelete /></button>
                    :
                    <></>
                }
                <span>{formatDistanceToNow(new Date(blog.createdAt),{addSuffix: true})}</span>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog
