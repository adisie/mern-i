

import React,{useContext} from 'react'

// icons
import { BsHandThumbsUpFill } from "react-icons/bs"
import { FaMessage } from "react-icons/fa6"
import { AiFillEdit } from "react-icons/ai"
import { MdDelete } from "react-icons/md"

// default profile pictures
import defaultAuthorProfile from '../assets/images/default-profiles/male-profile-2.jpg'

// contexts 
import { AuthContext } from '../contexts/AuthContext'

// pages 
import LoginSignup from './LoginSignup'
import UserProfile from './UserProfile'

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='sub-con home-con'>
        <div className="home-container">
          <div className="posts-container">
            <div className="post">
              <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et pariatur nihil iure debitis laboriosam qui, libero nostrum assumenda nam praesentium exercitationem recusandae enim eos ex eligendi repellat ipsum incidunt reprehenderit voluptatibus error tempora? Ullam, temporibus! Nihil, repudiandae facere quaerat quas laboriosam odio aliquam quibusdam, suscipit, ab optio accusantium! Voluptates illo voluptate mollitia animi est, veniam aut enim modi asperiores nemo, impedit provident esse vero totam iusto alias exercitationem necessitatibus qui fugit reiciendis? Illum natus quisquam eaque reiciendis a, culpa ratione illo facilis repudiandae architecto provident nisi dolor deleniti explicabo vitae cupiditate modi tenetur reprehenderit molestias doloremque soluta. Ea, omnis asperiores?
                </p>
                <div className="controllers">
                  <button className='post-controll-btn'><AiFillEdit /></button>
                  <button className='post-controll-btn'><MdDelete /></button>
                </div>
              </div>
              <div className="author-detail-container">
                <div className="author-img-name">
                  <img src={defaultAuthorProfile} alt="author-profile-image" />
                  <span>username</span>
                </div>
                <div className="post-reaction-controllers">
                  <button className='post-reaction-btn'><BsHandThumbsUpFill /></button>
                  <button className='post-reaction-btn'><FaMessage /></button>
                  <span>date</span>
                </div>
              </div>
            </div>
            <div className="post">
              <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et pariatur nihil iure debitis laboriosam qui, libero nostrum assumenda nam praesentium exercitationem recusandae enim eos ex eligendi repellat ipsum incidunt reprehenderit voluptatibus error tempora? Ullam, temporibus! Nihil, repudiandae facere quaerat quas laboriosam odio aliquam quibusdam, suscipit, ab optio accusantium! Voluptates illo voluptate mollitia animi est, veniam aut enim modi asperiores nemo, impedit provident esse vero totam iusto alias exercitationem necessitatibus qui fugit reiciendis? Illum natus quisquam eaque reiciendis a, culpa ratione illo facilis repudiandae architecto provident nisi dolor deleniti explicabo vitae cupiditate modi tenetur reprehenderit molestias doloremque soluta. Ea, omnis asperiores?
                </p>
                <div className="controllers">
                  <button className='post-controll-btn'><AiFillEdit /></button>
                  <button className='post-controll-btn'><MdDelete /></button>
                </div>
              </div>
              <div className="author-detail-container">
                <div className="author-img-name">
                  <img src={defaultAuthorProfile} alt="author-profile-image" />
                  <span>username</span>
                </div>
                <div className="post-reaction-controllers">
                  <button className='post-reaction-btn'><BsHandThumbsUpFill /></button>
                  <button className='post-reaction-btn'><FaMessage /></button>
                  <span>date</span>
                </div>
              </div>
            </div>
            <div className="post">
              <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et pariatur nihil iure debitis laboriosam qui, libero nostrum assumenda nam praesentium exercitationem recusandae enim eos ex eligendi repellat ipsum incidunt reprehenderit voluptatibus error tempora? Ullam, temporibus! Nihil, repudiandae facere quaerat quas laboriosam odio aliquam quibusdam, suscipit, ab optio accusantium! Voluptates illo voluptate mollitia animi est, veniam aut enim modi asperiores nemo, impedit provident esse vero totam iusto alias exercitationem necessitatibus qui fugit reiciendis? Illum natus quisquam eaque reiciendis a, culpa ratione illo facilis repudiandae architecto provident nisi dolor deleniti explicabo vitae cupiditate modi tenetur reprehenderit molestias doloremque soluta. Ea, omnis asperiores?
                </p>
                <div className="controllers">
                  <button className='post-controll-btn'><AiFillEdit /></button>
                  <button className='post-controll-btn'><MdDelete /></button>
                </div>
              </div>
              <div className="author-detail-container">
                <div className="author-img-name">
                  <img src={defaultAuthorProfile} alt="author-profile-image" />
                  <span>username</span>
                </div>
                <div className="post-reaction-controllers">
                  <button className='post-reaction-btn'><BsHandThumbsUpFill /></button>
                  <button className='post-reaction-btn'><FaMessage /></button>
                  <span>date</span>
                </div>
              </div>
            </div>
            <div className="post">
              <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et pariatur nihil iure debitis laboriosam qui, libero nostrum assumenda nam praesentium exercitationem recusandae enim eos ex eligendi repellat ipsum incidunt reprehenderit voluptatibus error tempora? Ullam, temporibus! Nihil, repudiandae facere quaerat quas laboriosam odio aliquam quibusdam, suscipit, ab optio accusantium! Voluptates illo voluptate mollitia animi est, veniam aut enim modi asperiores nemo, impedit provident esse vero totam iusto alias exercitationem necessitatibus qui fugit reiciendis? Illum natus quisquam eaque reiciendis a, culpa ratione illo facilis repudiandae architecto provident nisi dolor deleniti explicabo vitae cupiditate modi tenetur reprehenderit molestias doloremque soluta. Ea, omnis asperiores?
                </p>
                <div className="controllers">
                  <button className='post-controll-btn'><AiFillEdit /></button>
                  <button className='post-controll-btn'><MdDelete /></button>
                </div>
              </div>
              <div className="author-detail-container">
                <div className="author-img-name">
                  <img src={defaultAuthorProfile} alt="author-profile-image" />
                  <span>username</span>
                </div>
                <div className="post-reaction-controllers">
                  <button className='post-reaction-btn'><BsHandThumbsUpFill /></button>
                  <button className='post-reaction-btn'><FaMessage /></button>
                  <span>date</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          user ? <UserProfile /> : <LoginSignup />
        }
    </div>
  )
}

export default Home
