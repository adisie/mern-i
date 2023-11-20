

import {Routes,Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Signup from './pages/Signup'

// components
import Header from './components/Header'

//private routes
import PrivateRoutes from './utils/PrivateRoutes'

// context provider
import AuthContextProvider from './contexts/AuthContext'

// css
import './assets/css/index.css'

const App = () => {
    return ( 
        <div className="container">
            <AuthContextProvider>
                <Header />
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route index element={<Home />} />
                        <Route path='blogs' element={<Blog />} />
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Routes>
            </AuthContextProvider>
        </div>
     );
}
 
export default App;