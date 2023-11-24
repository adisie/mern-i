import { createContext,useState } from "react"

export const AuthContext = createContext()


const AuthContextProvider = (props) => {

    // states
    const [toLogin,setToLogin] = useState(true)
    return ( 
        <AuthContext.Provider value={{
            toLogin,
            setToLogin,
        }}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;