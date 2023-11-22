import { createContext,useState, useEffect} from "react"
import axios from "axios"


export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    // get local data 
    const localData = JSON.parse(localStorage.getItem('user'))
    // states
    const [user,setUser] = useState(localData || null)


    //effect
    useEffect(()=>{
        checkAuth()
    },[])

    // functions 
    // set user 
    const setAuhorizedUser = async user => {
        if(user){
            localStorage.setItem('user',JSON.stringify(user))
            setUser(user)
        }else {
            localStorage.removeItem('user')
            setUser(null)
        }
    }

    // check authoriaztion
    const checkAuth = async () => {
        try {
            const response = await axios.get('/blogs',{withCredentials: true})
            if(response.data.user){
                setUser(response.data.user)
                localStorage.setItem('user',JSON.stringify(response.data.user))
            }
        }catch(err){
            if(err.response.data.ERROR === 'AUTH_FAILED'){
                setUser(null)
                localStorage.removeItem('user')
            }
            
        }
    }
    return ( 
        <AuthContext.Provider value={{
            user,
            setUser,
            setAuhorizedUser,
            checkAuth,
        }}>
            {props.children}
        </AuthContext.Provider>
     )
}
 
export default AuthContextProvider