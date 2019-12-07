import React, { Component } from 'react';
import ('./LoginForm.css');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      <form onSubmit={this.handleSubmit} className='login-form d-flex justify-content-center'>
        <div className='w-100'>
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

          <div className='row'>
            <div className='col-sm-6 checkbox'>
                  <label>
                    <input type='checkbox' name='remember'/>
                    Remember me
                  </label>
            </div>
            <div className='col-sm-6'>
              <button type='submit' className='btn btn-warning btn-lg btn-block' >Login</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
