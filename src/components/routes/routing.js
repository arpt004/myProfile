

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Home from '../home/home';
import Footer from '../footer/footer';
import About from '../about/about';
import Contact from '../contact/contact';
import Works from '../works/works';


const Routing = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/home' element={ <Home /> }/>
                <Route path='/about' element={ <About /> }/>
                <Route path='/contact' element={ <Contact /> }/>
                <Route path='/works' element={ <Works /> }/>
                <Route path='/*' element={ <Home /> }/>
            </Routes>
            <Footer />
        </Router>      
    </div>
  )
}

export default Routing


