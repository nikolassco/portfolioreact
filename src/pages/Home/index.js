import React from 'react';
import About from '../../components/About';
import Navbar from '../../components/Navbar';
import Projects from '../../components/Projects';
import Resume from '../../components/Resume';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Resume />
      <Projects />
      <About />
    </div>
  )
}

export default Home
