import {Routes,Route} from 'react-router-dom'

// components
import Header from './components/Header'

// pages
import Home from './pages/Home'
import Blogs from './pages/Blogs'

import Login from './pages/Login'
import Signup from './pages/Signup'

// url protectors
import RouteProtector from './utils/RouteProtector'

// contexts 
import AuthContextProvider from './contexts/AuthContext'

// css
import './assets/css/index.css'

const App = () => {
    return ( 
        <div className="container">
            <AuthContextProvider>
                <Header />
                <Routes>
                    <Route element={<RouteProtector />}>
                        <Route index element={<Home />} />
                        <Route path='blogs' element={<Blogs />} />
                    </Route>
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Routes>
            </AuthContextProvider>
        </div>
     );
}
 
export default App;