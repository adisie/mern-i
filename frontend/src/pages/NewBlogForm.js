




import React,{useState,useContext} from 'react'
import { GrSend } from "react-icons/gr"

import { BlogsContext } from '../contexts/BlogsContext'

const NewBlogForm = () => {
    // contexts
    const {addNewBlog} = useContext(BlogsContext)
    // states
    const [body,setBody] = useState('')

    // functions
    //input change handler
    const inputChnageHandler = e => {
        setBody(e.target.value)
    }

    // adjust text area height
    const addjustTextAreaHeight = e => {
        e.target.style.height = "30px"
        const scHeght = e.target.scrollHeight 
        e.target.style.height = `${scHeght}px`
    }

    // submit handler
    const submitHandler = e => {
        e.preventDefault()
        addNewBlog(body)
        e.target.body.style.height = "30px"
        setBody('')
    }

  return (
    <div className="add-new-post-form-container">
        <form onSubmit={submitHandler}>
            <textarea name="body" value={body}
             onChange={inputChnageHandler}
             onKeyUp={addjustTextAreaHeight}></textarea>
            <button><GrSend /></button>
        </form>
    </div>
  )
}

export default NewBlogForm
