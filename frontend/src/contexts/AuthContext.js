
import { createContext,useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    // get local date
    const localData = JSON.parse(localStorage.getItem('user'))

    // states
    const [user,setUser] = useState(localData)

    return ( 
        <AuthContext.Provider value={{user}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;