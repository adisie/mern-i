
import { createContext,useState,useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    //local data
    const localData = JSON.parse(localStorage.getItem('user'))

    // states
    const [user,setUser] = useState(localData)

    // effects
    useEffect(()=>{
        checkAuth()
    },[])


    // functions
    // check auth
    const checkAuth =  async () => {
        axios.get('/blogs',{withCredentials: true})
            .then(response=>{
                localStorage.setItem('user',JSON.stringify(response.data.user))
            })
            .catch(err=>{
                if(err.response.data.error === 'AUTH_FAILED'){
                    console.log('---------------------------Anauthorizied Failed---------------------')
                    localStorage.removeItem('user')
                    setUser(null)
                }
            })

    }

    return ( 
        <AuthContext.Provider value={{user,setUser}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;