
import {Routes,Route} from 'react-router-dom'

// context providers
import AuthContextProvider from './contexts/AuthContext'
import ProfileContextProvider from './contexts/ProfileContext'

// private routes
import PrivateRoutes from './utils/PrivateRoutes'

// components
import Header from './components/Header'

// pages
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Signup from './pages/Signup'

// styles
import './assets/css/index.css'

const App = () => {
    return ( 
        <div className="container">
            <AuthContextProvider>
                <ProfileContextProvider>
                    <Header />
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route index element={<Home />} />
                            <Route path='blogs' element={<Blogs />} />
                        </Route>
                        <Route path='login' element={<Login />} />
                        <Route path='signup' element={<Signup />} />
                    </Routes>
                </ProfileContextProvider>
            </AuthContextProvider>
        </div>
     );
}
 
export default App;