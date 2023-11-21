

import React,{useState,useContext} from 'react'
import { IoMdSend } from "react-icons/io"

import { AuthContext } from '../../contexts/AuthContext'
import { BlogsContext } from '../../contexts/BlogsContext'

const NewBlogForm = () => {
    //contexts
    const {addNewBlog} = useContext(BlogsContext)
    const {user} = useContext(AuthContext)
    //states
    const [body,setBody] = useState('')


    // functions
    const inputChangeHandler = e => {
        setBody(e.target.value)
    }

    const adjustTextAreaHeight = e => {
        e.target.style.height = '32px'
        const scHeight = e.target.scrollHeight 
        e.target.style.height = `${scHeight}px`
    }

    const submitHandler = e => {
        e.preventDefault()
        addNewBlog({author: user.username,body})
        setBody('')
        e.target.body.style.height = '32px'
    }
  return (
    <div className='new-uppdate-form-container'>
      <form onSubmit={submitHandler}>
        <textarea name="body" value={body} onChange={inputChangeHandler} onKeyUp={adjustTextAreaHeight}></textarea>
        <button><IoMdSend /></button>
      </form>
    </div>
  )
}

export default NewBlogForm
