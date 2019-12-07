import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignupForm from './components/molecules/SignupForm/SignupForm';
import LadingPage from './components/pages/LadingPage/LadingPage';
import Navbar from './components/organisms/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import { Provider } from 'react-redux';

import store from "./store"

function App() {
  return (
    <div className="App">
      <Provider
      store={store}
      >
      <Navbar />
      
      <Switch>
        <Route exact path='/'>
          <LadingPage />          
        </Route>
        
        <Route exact path='/signup'>
          <SignupForm />
        </Route>

        <Route exact path='/home'>
          <Home />
        </Route>

      </Switch>
      </Provider>
    </div>
  );
}

export default App;
