import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Home from './components/pages/Home/Home';
import Wallet from './components/pages/Wallet/Wallet';
import PrivateRoute from './router/privateRoute';
import { Provider } from 'react-redux';
import store from "./store"

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUserAuthenticated: false,
    };

    const authToken = localStorage.getItem('loggedUser');

    if(authToken) this.state.isUserAuthenticated = true;
  }

  authenticateUser = () => {
    this.setState({ isUserAuthenticated: true })
  }

  logoutUser = () => {
    localStorage.removeItem('loggedUser');
    this.setState({ isUserAuthenticated: false });
  }

  render() {
    const { isUserAuthenticated } = this.state;

    return (
      <div>

        <Provider store={store}>
          <Switch>
            
            {/* Public Routes */}
            <Route exact path='/'>
              <LandingPage route='landing' />          
            </Route>
            
            <Route exact path='/signup'>
              <Signup />
            </Route>
    
            <Route exact path='/login' render={(props) => <Login {...props} isUserAuthenticated={this.state.isUserAuthenticated} authenticateUser={this.authenticateUser} />} />
        
            {/* Private Routes */}
            <PrivateRoute exact path='/home' component={Home} isAuth={isUserAuthenticated} route='home' logout={this.logoutUser} />
            <PrivateRoute exact path='/wallet' component={Wallet} isAuth={isUserAuthenticated} route='wallet' logout={this.logoutUser} />
    
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
