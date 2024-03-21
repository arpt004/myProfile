

import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-content">
        <a href="#" className='footer-header'>
            <h1> Arpit </h1>
        </a>
        <div className='footer-list'>
            <ul className='footer-ul'>
                <li> <Link to='/home'> Home </Link> </li>
                <li> <Link to='/about'> About </Link> </li>
                <li> <Link to='/works'> Works </Link> </li>
                <li> <Link to='/contact'> Contact </Link> </li>
            </ul>
        </div>
        <p className="copyright">
            © All rights reserved by <strong>Arpit Jain</strong>
        </p>
    </div>
  )
}

export default Footer


