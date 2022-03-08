import React, { useState } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          ></Nav>
          <main className='site-content'>
            <Switch>
              <Route exact path='/' component={About} />
              <Route exact path='/about' component={About} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/resume' component={Resume} />
              <Route component={NoMatch} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
