import { IoMdSend } from "react-icons/io"
import React, { useContext } from "react"

import { BlogsContext } from "../../contexts/BlogsContext"

const EditBlogForm = () => {
    const {editFormField,setEditFormField,updateSingleBlog} = useContext(BlogsContext)

    //input change handler
    const inputChangeHandler = e => {
        const {name,value} = e.target 
        setEditFormField({
            ...editFormField,
            [name]: value
        })
    }
    
    //adjust height
    const adjustTextAreaHeight = e => {
        // e.target.style.height = '32px'
        const scHeight = e.target.scrollHeight 
        e.target.style.height = `${scHeight}px`
    }

    // edit submit handler
    const editSbmitHandler = e => {
        e.preventDefault()
        updateSingleBlog(editFormField)
        setEditFormField({
            _id: null,
            body: ''
        })
        e.target.body.style.height = '32px'
    }

  return (
    <div className='new-uppdate-form-container'>
      <form onSubmit={editSbmitHandler}>
        <textarea name="body" value={editFormField.body}
         onChange={inputChangeHandler}
         onKeyUp={adjustTextAreaHeight}></textarea>
        <button><IoMdSend /></button>
      </form>
    </div>
  )
}

export default EditBlogForm
