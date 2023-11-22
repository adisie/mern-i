import { useContext } from "react"
import { NavLink } from "react-router-dom"

// contexts
import { AuthContext } from "../contexts/AuthContext"

// sub headers
import LoggedInHeader from "./sub-comonents/LoggedInHeader"
import LoggedOutHeader from "./sub-comonents/LoggedOutHeader"

const Header = () => {
    const {user} = useContext(AuthContext)
    return ( 
        <header>
            <div className="header-main-container">
                <div className="sub-container header">
                    <NavLink to='/' className='site-logo'>highland</NavLink>
                    {
                        user 
                        ?
                        <LoggedInHeader />
                        :
                        <LoggedOutHeader />
                    }
                </div>
            </div>
        </header>
     );
}
 
export default Header;