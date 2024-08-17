import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Nav from './Nav';
import BodyApp from './Body.jsx';

import Footer from './Footer';


function App() {
  return (
    <div>
    <Router>
        <Nav/>
      <Routes>
      <Route path='/' element={<BodyApp/>}/>
      </Routes>
       <Footer/>
    </Router>
    
    </div>
  )
}

export default App
