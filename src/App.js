import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignupForm from './components/molecules/SignupForm/SignupForm';
import LadingPage from './components/pages/LadingPage/LadingPage'

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <LadingPage />          
        </Route>
        
        <Route exact path='/signup'>
          <SignupForm />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
