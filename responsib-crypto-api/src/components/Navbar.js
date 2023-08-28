import React, { useState } from 'react';
import './NavbarStyles.css'

import {FaBars , FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [click , setClick] = useState(false)
   const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <div className='container'>
                <h1>De <span className='primary'>Fi</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/#featured'>Featured</a>
                    </li>
                    <li>
                        <a href='/#signup'>Earn</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                  {click  ? (<FaTimes size={20} style={{color: '#333'}} ></FaTimes>): (<FaBars size={20} style={{color: '#333'}}></FaBars>)}

                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;