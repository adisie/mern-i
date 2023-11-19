

import {Routes,Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Signup from './pages/Signup'

// components
import Header from './components/Header'

// css
import './assets/css/index.css'

const App = () => {
    return ( 
        <div className="container">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='blogs' element={<Blog />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </div>
     );
}
 
export default App;