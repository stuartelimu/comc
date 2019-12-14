import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Values from './Values';
import Mission from './Mission';
import Contact from './Contact';

function App() {
  return (
    <div className="body">
      <Header />
      <About />
      <Values />
      <Mission />
      <Contact />
    </div>
  );
}

export default App;
