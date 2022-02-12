import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav />
      <main className='site-content'>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
