import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'

import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer'

import './Global.scss'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
