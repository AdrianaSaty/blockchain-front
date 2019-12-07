import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
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
      
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <LadingPage />          
        </Route>
        
        <Route exact path='/signup'>
          <Signup />
        </Route>

        <Route exact path='/login'>
          <Login />
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
