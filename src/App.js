import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route exact path="/"><Redirect to="/home" /></Route>
            <Route path='/home' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        )} />
      </HashRouter>

    </>
  );
}

export default App;
