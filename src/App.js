import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

function App() {
  document.title = 'Adam Field Portfolio';
  const [categories] = useState([
    { name: 'about me' },
    { name: 'portfolio' },
    { name: 'contact me' },
    { name: 'resume' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <Router basename='/AdamField-Portfolio'>
      <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
        <main className='site-content'>
          <Switch>
            <Route exact path='/' component={About} />
            <Route
              exact
              path='/about'
              component={() => (
                <About setCurrentCategory={setCurrentCategory} categories={categories} />
              )}
            />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/resume' component={Resume} />

            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
