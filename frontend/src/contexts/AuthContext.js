
import { createContext,useState,useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    // states
    const [user,setUser] = useState(null)

    // effects
    useEffect(()=>{
        checkAuth()
    },[])


    // functions
    // check auth
    const checkAuth =  () => {
        console.log("Something Happen")
    }

    return ( 
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;