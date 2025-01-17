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
  const istoggle = useSelector((store) => store?.toggle?.isToggle)

  return (
    <div className='bg-black'  >
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              {istoggle && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center" >
                    <Body />
                  </div>
                )}
              <Home />
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
