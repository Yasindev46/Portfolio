import React from 'react';
import './index.css';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contactme from './Components/ContactMe/Contactme';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Section/>
        <About />
        <Skills />
        <Projects />
        <Contactme />
      </main>
    </div>
  );
}

export default App;
