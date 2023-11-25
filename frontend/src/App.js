import {Routes,Route} from 'react-router-dom'

// context providers
import AuthContextProvider from './contexts/AuthContext'
import UserProfileContextProvider from './contexts/UserProfileContext'

// components
import Header from "./components/Header"

// pages
import Home from "./pages/Home"

// css
import './assets/css/index.css'

const App = () => {
    return ( 
        <div className="container">
            <AuthContextProvider>
                <UserProfileContextProvider>
                    <Header />
                    <Routes>
                        <Route index element={<Home />} />
                    </Routes>
                </UserProfileContextProvider>
            </AuthContextProvider>
        </div>
     );
}
 
export default App;