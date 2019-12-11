import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import LoginForm from '../../molecules/LoginForm/LoginForm';
import FormHeader from '../../molecules/FormHeader/FormHeader';

class Login extends Component {
  constructor(pros) {
    super(pros);
    this.state = {

    }
  }


  render() {
    const { authenticateUser, history } = this.props;
    return (
      <div className='container-fluid' >
        <FormHeader />
        <div className='content'>
          <div className='text-center login-area'>
            <h2>
              To continue, login to Blotting.
            </h2>
          </div>
          
          <LoginForm authenticateUser={authenticateUser} history={history} />

          <div className='divider col-xs-12'></div>

          <div className='signup-area text-center'>
            <h2>Don't have an account?</h2>
            <Link className='btn btn-outline-warning btn-lg' to='/signup'>Signup to Blotting</Link>
          </div>

        </div>

      </div>
    );
  }
}

export default Login;
