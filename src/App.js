import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import LadingPage from './components/pages/LadingPage/LadingPage';
import Navbar from './components/organisms/Navbar/Navbar';
import Home from './components/pages/Home/Home';
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
    this.setState({ isUserAuthenticated: false })
  }

  render() {
    const { isUserAuthenticated } = this.state;

    return (
      <div>
        <Navbar isUserAuthenticated={isUserAuthenticated} />

        <Provider store={store}>
          <Switch>
            
            {/* Public Routes */}
            <Route exact path='/'>
              <LadingPage />          
            </Route>
            
            <Route exact path='/signup'>
              <Signup />
            </Route>
    
            <Route exact path='/login' render={(props) => <Login {...props} authenticateUser={this.authenticateUser} />} />
            
            <Route exact path='/home'>
              <Home />
            </Route>

            {/* Private Routes */}
            <PrivateRoute exact path='/home' component={Home} isAuth={isUserAuthenticated} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
