import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { About } from './About'

import './Global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <About />
  </React.StrictMode>,
)
