import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav />
      <main className='site-content'>
        {/* <About></About> */}
        <Portfolio></Portfolio>
      </main>
      <Footer />
    </div>
  );
}

export default App;
