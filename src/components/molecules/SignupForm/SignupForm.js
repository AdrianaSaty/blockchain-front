import React, { Component } from 'react';
import api from '../../../api/api';
import ReCAPTCHA from 'react-google-recaptcha';
import ('./Signup.css');

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      email: '',
      password: '',
      confirmPassword: '',
      submitMessage: '',
      reacptcha: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async(event) => {
    const { birthYear, password, confirmPassword } = this.state;
    event.preventDefault();

    if (password !== confirmPassword) {
      this.setState({
        submitMessage: 'Passwords do not match.',
        password: '',
        confirmPassword: '',
      })
      return;
    }

    // need to improve this validation
    if (birthYear > new Date().getFullYear() - 18) {
      this.setState({
        submitMessage: 'You must be 18 years or older to register.'
      })
      return;
    }

    if (password.length < 7) {
      this.setState({
        submitMessage: 'Please make your password at least 8 characters long for security purposes.'
      })
      return;
    }

    const response = await api({
      url: `${process.env.REACT_APP_BLOCKCHAIN_LOGIN_API}/users/signup`,
      method: 'POST',
      data: this.state,
    });

    // would like to send server side error message to client. how do i access it?
    // if (response.status !== 200) {
    //   console.log(response);
    //   return;
    // }

    if (response.status === 200) {
      this.setState({
        firstName: '',
        lastName: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        email: '',
        password: '',
        confirmPassword: '',
        submitMessage: 'Successfully registered!'
      })
    }
  }

  render() {
    const { firstName, lastName, birthDay, birthMonth, birthYear, email, password, confirmPassword, submitMessage } = this.state;
    return (
      <form onSubmit={(event) => this.handleSubmit(event)} className='signup-form d-flex justify-content-center'>
        <div className='w-25'>
          <div className='form-group'>
            <input
              className='form-control'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              type='text'
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              type='text'
              onChange={this.handleChange} />        
          </div>        

          <label for='birthDay' >
            Date of Birth
          </label>
          <div className='form-row'>
            <div className='form-group col-md-2'>
              <input
                className='form-control'
                name='birthDay'
                placeholder='Day'
                value={birthDay}
                type='number'
                max={31}
                min={1}
                maxLength={2}
                onChange={this.handleChange} />
            </div>
            <div className='form-group col-md-6'>
              <select
                className='form-control'
                name='birthMonth'
                value={birthMonth}
                onChange={this.handleChange} > 
                <option defaultValue='selected'>Month</option>
                <option value='01'>January</option>
                <option value='02'>February</option>
                <option value='03'>March</option>
                <option value='04'>April</option>
                <option value='05'>May</option>
                <option value='06'>June</option>
                <option value='07'>July</option>
                <option value='08'>August</option>
                <option value='09'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
            </div>
            <div className='form-group col-md-4'>
              <input
                className='form-control'
                name='birthYear'
                placeholder='Year'
                value={birthYear}
                type='number'
                min={1900}
                maxLength={4}
                onChange={this.handleChange} />
            </div>
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              name='email'
              placeholder='Email'
              value={email}
              type='email'
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              name='password'
              placeholder='Password'
              value={password}
              type='password'
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={confirmPassword}
              type='password'
              onChange={this.handleChange} />
          </div>
          <div>
            <ReCAPTCHA
              className='recaptcha'
              sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
            />
            <button type='submit' className='btn btn-warning btn-lg btn-block' ><strong className='text-dark'>Signup</strong></button>
          </div>
          <div className='txt-center'>
            {submitMessage ? <h2>{submitMessage}</h2> : null }
          </div>
        </div>
      </form>
    );
  }
}

export default SignupForm;
