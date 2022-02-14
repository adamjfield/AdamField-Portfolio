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
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <Router>
      <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
        <main className='site-content'>
          <Switch>
            <Route exact path='/Portfolio' component={About} />
            <Route exact path='/Portfolio/about' component={About} />
            <Route exact path='/Portfolio/portfolio' component={Portfolio} />
            <Route exact path='/Portfolio/contact' component={Contact} />
            <Route exact path='/Portfolio/resume' component={Resume} />

            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
