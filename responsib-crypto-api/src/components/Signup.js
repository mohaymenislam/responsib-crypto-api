import React from 'react';
import './SignupStyles.css';

import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup' id='signup'>
            <div className="container">
                {/* left */}
             <div className="left">
                 <img src={Crypto} alt="" />
             </div>


                {/* right */}
                <div className="right">
                    <h2>Earn passive income with crypt</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets . to 12% annual rewards on 30+ digital assets </p>
                    <div className="input-container">
                     <input type="email"  placeholder='Enter your email' />
                     <button className='btn'>Learn more</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Signup;