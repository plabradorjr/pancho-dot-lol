import React from 'react'
import { Link } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {

    return (
        <div className='container-fluid justify-text-center' id='nav-box'>
           <Link to="/">
           <p className="text-center" id="nav-text">Pancho.lol</p>
           </Link> 
        </div>
    )
  
}

export default Navbar;