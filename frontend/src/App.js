import {Routes,Route} from 'react-router-dom'

// components
import Header from './components/Header'

// pages
import Home from './pages/Home'
import Blogs from './pages/Blogs'

import Login from './pages/Login'
import Signup from './pages/Signup'

// css
import './assets/css/index.css'

const App = () => {
    return ( 
        <div className="container">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='blogs' element={<Blogs />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </div>
     );
}
 
export default App;