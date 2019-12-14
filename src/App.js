import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Values from './Values';
import Mission from './Mission';


function App() {
  return (
    <div className="body">
      <Header />
      <About />
      <Values />
      <Mission />
      <div>5</div>
    </div>
  );
}

export default App;
