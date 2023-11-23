import { createContext,useState,useEffect } from "react"
import axios from 'axios'


export const BlogsContext = createContext()


const BlogsContextProvider = (props) => {
    // states
    const [blogs,setBlogs] = useState([])

    // effects 
    useEffect(()=>{
        getAllBlogs()
    },[])

    //functions
    
    // get all blogs
    const getAllBlogs = async () => {
        try{
            const response = await axios.get('blogs',{withCredentials: true})
            setBlogs([...blogs,...response.data.blogs])
        }catch(err){
            console.log(err)
        }
    }

    // add new blog
    const addNewBlog = async body => {
        try {
            const response = await axios.post('/blogs',{body},{withCredentials: true})
            setBlogs([response.data.blog,...blogs])
        }catch(err){
            console.log(err)
        }
    }

    // delete blog 
    const deleteBlog = async _id => {
        try {
            const response = await axios.delete(`/blogs/${_id}`,{withCredentials: true})
            console.log(response)
            setBlogs(blogs.filter(blog=>blog._id!==_id))
        }catch(err){
            console.log(err)
        }
    }

    return ( 
        <BlogsContext.Provider value={{
            blogs,
            deleteBlog,
            addNewBlog,
        }}> 
            {props.children}
        </BlogsContext.Provider>
     );
}
 
export default BlogsContextProvider;