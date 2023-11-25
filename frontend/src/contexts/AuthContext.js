import { createContext,useState,useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()


const AuthContextProvider = (props) => {

    // states
    const [toLogin,setToLogin] = useState(true)
    const [user,setUser] = useState(null)
    // effects
    useEffect(()=>{
        authChecker()
    },[])

    // auth checker 
    const authChecker = async () => {
        try {
            const response = await axios.get('/users/auth-check',{withCredentials: true})
            setUser(response.data.user)
        }catch(err){
            setUser(null)
        }
    }

    // login user
    const loginUser = async data =>{
        try {
            const response = await axios.post('/users/login',data,{withCredentials: true})
            setUser(response.data.user)
            return "LOGED-IN"
        }catch(err){
            return err.response.data.errors
        }
    }

    // logout user
    const logoutUser = async () => {
        try{
            await axios.get('/users/logout',{withCredentials: true})
            setUser(null)
        }catch(err){
            console.log(err)
        }
    }

    
    return ( 
        <AuthContext.Provider value={{
            toLogin,
            user,
            setToLogin,
            loginUser,
            logoutUser,
        }}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;