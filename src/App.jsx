import React from 'react';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Help from './components/Help/Help';
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Content />
      <Footer />
      <Help />
    </div>
  )
}

export default App
