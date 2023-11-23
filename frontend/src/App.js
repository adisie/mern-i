

// contexts
import ProfilesContextProvider from "./contexts/ProfilesContext"

// pages
import Profiles from "./pages/Profiles"


// css
import './App.css'

const App = () => {
    return ( 
        <div className="container">
            <ProfilesContextProvider>
                <Profiles />
            </ProfilesContextProvider>
        </div>
     );
}
 
export default App;