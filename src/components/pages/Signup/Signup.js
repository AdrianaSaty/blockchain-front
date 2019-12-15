import React, { Component } from 'react';
import SignupForm from '../../molecules/SignupForm/SignupForm';
import { Link } from 'react-router-dom';
import FormHeader from '../../molecules/FormHeader/FormHeader';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div className='container-fluid'>
        <FormHeader />
        <div className='content'>
          <div className='text-center login-area'>
            <h2>
              Signup with your email
            </h2>
          </div>
          <SignupForm />
          <div className='divider col-xs-12'></div>

          <div className='signup-area text-center'>
            <h2>Already have an account?</h2>
            <Link className='btn btn-outline-warning btn-lg' to='/login'>Login to Blotting</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
