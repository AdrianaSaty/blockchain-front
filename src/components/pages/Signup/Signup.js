import React, { Component } from 'react';
import SignupForm from '../../molecules/SignupForm/SignupForm';
import FormHeader from '../../molecules/FormHeader/FormHeader';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div className='container-fluid'>
        <div className='text-center'>
          <h2>
            Signup with your email
          </h2>
        </div>
          <SignupForm />
      </div>
    );
  }
}

export default Signup;
