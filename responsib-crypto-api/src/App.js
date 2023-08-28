import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Signup from './components/Signup';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Featured></Featured>
      <Signup></Signup>
      <Footer></Footer>
    </>
  );
};

export default App;
