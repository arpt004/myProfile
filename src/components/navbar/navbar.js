

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


function removeClass() {
    let allElements = document.querySelectorAll(".selectedPage");
    allElements.forEach(eachEle => {
        eachEle.classList.remove('selectedPage');
    })
}

const Navbar = () => {

    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        removeClass()
        const selectElement = document.getElementById(currentPage)
        if(selectElement) selectElement.classList.add('selectedPage')
    }, [currentPage])

    useEffect(() => {
        removeClass()
        const getUrl = window.location.href;
        const getPage = getUrl.split('/')[getUrl.split('/').length-1]
        console.log(getPage)
    
        const selectElement = document.getElementById(getPage)
        if(selectElement) selectElement.classList.add('selectedPage')
    }, [])

    return (
        <div className='navbar'>
            <div className='navbar-header'>
                <h1> Arpit </h1>
            </div>

            <div className='navbar-list'>
                <ul className='navbar-ul'>
                    <li className='selectedPage'> <Link to='/home' className='selectedPage' id='home' onClick={() => setCurrentPage('home')}> Home </Link> </li>
                    <li> <Link to='/about' id='about' onClick={() => setCurrentPage('about')}> About </Link> </li>
                    <li> <Link to='/works' id='works' onClick={() => setCurrentPage('works')}> Works </Link> </li>
                    <li> <Link to='/contact' id='contact' onClick={() => setCurrentPage('contact')}> Contact </Link> </li>
                </ul>
            </div>

            <div className='navbar-talk'>
                <button> Let's Talk</button>
            </div>
        </div>
    )
}

export default Navbar


