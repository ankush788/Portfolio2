import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work ,Experience, Button } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Skills />
      <Experience />
      <Work />
      <Footer />
      <Button/> 
    </div>
  )
}

export default App;
