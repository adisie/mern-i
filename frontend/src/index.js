
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'

import App from './App'

axios.defaults.baseURL = "http://localhost:3080"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
)