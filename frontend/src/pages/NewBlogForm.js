
import { MdSend } from "react-icons/md"

import React,{useState,useContext} from 'react'

import { BlogsContext } from "../contexts/BlogsContext"

const NewBlogForm = () => {
    // contexts
    const {addNewBlog} = useContext(BlogsContext)

    // states
    const [body,setBody] = useState('')


    // input change handler
    const inputChangeHandler = e => {
        setBody(e.target.value)
    }

    // adjust textarea height
    const adjustTextAreaHeight = e => {
        e.target.style.height = '34px'
        const scHeight = e.target.scrollHeight 
        e.target.style.height = `${scHeight}px`
    }

    // post a new blog
    const addNewBlogSubmitHandler = e => {
        e.preventDefault()
        addNewBlog(body)
        e.target.body.style.height = '33px'
        setBody('')
    }
  return (
    <div className="new-update-form-container">
        <form onSubmit={addNewBlogSubmitHandler}>
        <textarea name="body" 
        value={body}
        onChange={inputChangeHandler}
        onKeyUp={adjustTextAreaHeight}></textarea>
        <button><MdSend /></button>
        </form>
    </div>
  )
}

export default NewBlogForm
