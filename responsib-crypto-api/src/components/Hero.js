import React from 'react';
import './HeroStyles.css';

import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
               
               {/* left site */}
              <div className='left'>
                   <p>Buy & sell crypto 24/7 using your retirement account</p>
                   <h1>Invest in Crypto curreny with your IRA </h1>     
                   <p>Buy , Sell and story hundreds of crypto Currenies </p>

                 <div className='input-container'>
                     <input type='email' placeholder='Enter your email'></input>
                     <button className='btn'>Learn More</button>
                 </div>
              </div>

               {/* Right site */}
               <div className='right'>
                  <div className='img-container'>
                     <img src={Crypto} alt='crypto'></img>
                  </div>
               </div>

            </div>
            
        </div>
    );
};

export default Hero;