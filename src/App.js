import React from 'react';
import './App.css';
import Nav from './Nav';
import Skills from './Skills';
import ProjectList from './ProjectList';
import Footer from './Footer';
import ContactMe from './ContactMe';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='main-container' id='top'>
        <div className='container-1'>
          <div id='content-desktop' className='whoami'>
            My name is Reed Schalo. I design and build websites.
          </div>
          <div id='content-mobile' className='whoami'>
            My name is Reed Schalo. I design and build websites.
          </div>
        </div>
      </div>
      <Skills />
      <ProjectList />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
