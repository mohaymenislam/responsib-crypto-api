import React from 'react';
import './FooterStyles.css';

import {FaFacebook , FaGithub , FaTwitter , FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="col col-1">
                    <h1>De <span className='primary'>Fi</span></h1>
                </div>
                <div className="col">
                    <h5>Support</h5>
                    <span className='bar'> </span>
                        <a href="/">Contact us</a>
                        <a href="/">Chat</a>
                        <a href="/">Help chanter</a>
                        <a href="/">FAQ</a>
                    
                </div>
                <div className="col">
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href="/">Cloud</a>
                        <a href="/">Commerce</a>
                        <a href="/">Pro</a>
                        <a href="/">API</a>
                    
                </div>
                <div className="col">
                    <h5>Conpony</h5>
                    <span className='bar'> </span>
                        <a href="/">About</a>
                        <a href="/">Information</a>
                        <a href="/">Legal</a>
                        <a href="/">Privacy</a>
                    
                </div>
                <div className="col">
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href="/"><FaFacebook className='icon'></FaFacebook></a>
                        <a href="/"><FaTwitter className='icon'></FaTwitter></a>
                        <a href="/"><FaLinkedin className='icon'></FaLinkedin></a>
                        <a href="/"><FaGithub className='icon'></FaGithub></a>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Footer;