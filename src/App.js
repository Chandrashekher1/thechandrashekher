import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from './Hooks/useFetch';
import CircularProgressVariants from './components/Loader';
import Cursor from './components/Cursor';

const App = () => {
  const { data: aboutData, loading: aboutLoading } = useFetch('about');
  const { data: projectData, loading: projectLoading } = useFetch('project');
  const { data: skillData, loading: skillLoading } = useFetch('skill');

  const isLoading = aboutLoading || projectLoading || skillLoading;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white text-2xl bg-black">
        <h1 className='text-6xl font-bold my-4'>▫ CP<span className='text-yellow-600'>03 ▫</span></h1>
        <CircularProgressVariants/>
      </div>
    );
  }

  
  return (
    <div className='bg-black'  >
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />  
              <Cursor/>           
              <Home data = {aboutData} />
              {/* <Body/>   */}
              <About data ={aboutData} />
              <Projects data={projectData}/>
              <Skills data={skillData} />
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
