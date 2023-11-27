import {Routes,Route} from 'react-router-dom'

// context providers
import AuthContextProvider from './contexts/AuthContext'
import UserProfileContextProvider from './contexts/UserProfileContext'
import BlogsContextProvider from './contexts/BlogsContext'

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
                    <BlogsContextProvider>
                        <Header />
                        <Routes>
                            <Route index element={<Home />} />
                        </Routes>
                    </BlogsContextProvider>
                </UserProfileContextProvider>
            </AuthContextProvider>
        </div>
     );
}
 
export default App;