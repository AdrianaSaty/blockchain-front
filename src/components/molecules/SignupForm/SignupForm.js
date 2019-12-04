import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import ('./Signup.css');

class Form extends Component {
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
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  onChange(value) {
    console.log('Captcha value: ', value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='signup-form d-flex justify-content-center'>
        <div className='w-25'>
          <div className='form-group'>
            <input
              className='form-control'
              name='firstName'
              placeholder='First Name'
              type='text'
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              name='lastName'
              placeholder='Last Name'
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
                type='number'
                max={new Date().getFullYear() - 18}
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
              type='email'
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              name='password'
              placeholder='Password'
              type='password'
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              name='confirmPassword'
              placeholder='Confirm Password'
              type='password'
              onChange={this.handleChange} />
          </div>
          <div>
            <ReCAPTCHA
              className='recaptcha'
              sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
              onChange={this.onChange}
            />
            <button type='submit' className='btn btn-outline-warning btn-lg btn-block' >Signup</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
