import {createContext,useState,useEffect} from 'react'
import axios from 'axios'


export const BlogsContext = createContext()

const BlogsContextProvider = (props) => {
    // states
    const [blogs,setBlogs] = useState([])

    // effects
    useEffect(()=>{
        getAllBlogs()
    })

    // functions
    // get all blogs
    const getAllBlogs = async () => {
        try {
            const response = await axios.get('/blogs',{withCredentials: true})
            setBlogs([...response.data.blogs])
            console.log(response.data.blogs)
        }catch(err){
            console.log(err)
        }
    }

    // add new blog
    const addNewBlog = async body => {
        try {
            const response = await axios.post('/blogs',{body},{withCredentials: true})
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }

    // delete blog
    const deleteBlog = async _id => {
        try{
            await axios.delete(`/blogs/${_id}`,{withCredentials: true})
            setBlogs(blogs.filter(blog=>blog._id !== _id))
        }catch(err){
            console.log(err)
        }
    }

    return ( 
        <BlogsContext.Provider value={{
            blogs,
            addNewBlog,
            deleteBlog,
        }}>
            {props.children}
        </BlogsContext.Provider>
     );
}
 
export default BlogsContextProvider;