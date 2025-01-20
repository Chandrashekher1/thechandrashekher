import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Body from './CLi/Body';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {

  return (
    <div className='bg-black'  >
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />             
              <Home />
              <Body/>  
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />
          {/* <Route path="/cli" element={<Body />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
