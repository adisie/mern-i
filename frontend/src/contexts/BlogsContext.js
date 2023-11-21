import { createContext,useState,useEffect } from "react"
import axios from "axios"

export const BlogsContext = createContext()


const BlogsContextProvider = (props) => {

    const [editFormField,setEditFormField] = useState({
        _id: null,
        body: ''
    })
    
    // states
    const [blogs,setBlogs] = useState([])

    // effects
    useEffect(()=>{
        getAllBlogs()
    },[])

    // functions
    // get all blogs
    const getAllBlogs = async () => {
        try{
            const response = await axios.get('/blogs',{withCredentials: true})

            if(response.data.blogs){
                setBlogs([...blogs,...response.data.blogs])
            }
        }catch(err){
            if(err.response.data.ERROR === 'AUTH_FAILED'){
                console.log("AUTH_FAILED")
            }
        }
    }

    // add new blog 
    const addNewBlog = async data => {
        const response = await axios.post('/blogs',data,{withCredentials: true})
        setBlogs([response.data.newBlog,...blogs])
    }

    // delete blog
    const deleteSingleBlog = async _id => {
        await axios.delete(`blogs/${_id}`,{withCredentials: true})
        const newBlogs = blogs.filter(blog=>blog._id !== _id)
        setBlogs([...newBlogs])
    }

    // edit blog
    const editSingleBlog = blog => {
        setEditFormField({
            ...editFormField,
            _id: blog._id,
            body: blog.body
        })
    }

    //final blog update submission
    const updateSingleBlog = async blog =>{
        try {
            const response = await axios.put(`/blogs/${blog._id}`,{body: blog.body},{withCredentials: true})
            const BlogIndex = blogs.findIndex(bg => bg._id === blog._id )
            blogs[BlogIndex] = response.data.blog
            setBlogs([...blogs])
        }catch(err){
            console.log(err)
        }
    }
    return ( 
        <BlogsContext.Provider value={{
            blogs,
            editFormField,
            addNewBlog,
            deleteSingleBlog,
            editSingleBlog,
            setEditFormField,
            updateSingleBlog,
            }}>
            {props.children}
        </BlogsContext.Provider>
     );
}
 
export default BlogsContextProvider;