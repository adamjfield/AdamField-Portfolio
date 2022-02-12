import React, { useState, useEffect } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  document.title = 'Adam Field Portfolio';
  const [categories] = useState([
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
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
