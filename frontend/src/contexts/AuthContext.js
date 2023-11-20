
import { createContext,useState,useEffect } from "react"
import axios from 'axios'

export const AuthContext = createContext()


const AuthContextProvider = (props) => {
    // get local data
    const localData = JSON.parse(localStorage.getItem('user'))
    // states
    const [user,setUser] = useState(localData)

    //effects
    useEffect(()=>{
        checkAuth()
    },[])

    // functions
    //check auth
    const checkAuth = async () => {
        try{
            const response = await axios.get('/blogs',{withCredentials: true})
            console.log(response.data.user)
            //set user
            // setUser(response.data.user)

            //set localStorage
            localStorage.setItem('user',JSON.stringify(response.data.user))

        }catch(err){
            if(err.response.data.ERROR === 'AUTH_FAILED'){
                setUser(null)
                localStorage.removeItem('user')
            }
        }
    }
    return ( 
        <AuthContext.Provider value={{user,setUser}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider