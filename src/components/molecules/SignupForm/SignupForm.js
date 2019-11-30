import React, { Component } from 'react';
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

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit} className='signup-form'>
          <input
            name='firstName'
            placeholder='First Name'
            type='text'
            onChange={this.handleChange} />

          <input
            name='lastName'
            placeholder='Last Name'
            type='text'
            onChange={this.handleChange} />

          <label>
            Date of Birth
          </label>
          <section>
            <input
              name='birthDay'
              placeholder='Day'
              type='number'
              max={31}
              min={1}
              maxLength={2}
              onChange={this.handleChange} />

            <select
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

            <input
              name='birthYear'
              placeholder='Year'
              type='number'
              max={new Date().getFullYear() - 18}
              min={1900}
              maxLength={4}
              onChange={this.handleChange} />
          </section>

          <input
            name='email'
            placeholder='Email'
            type='email'
            onChange={this.handleChange} />

          <input
            name='password'
            placeholder='Password'
            type='password'
            onChange={this.handleChange} />

          <input
            name='confirmPassword'
            placeholder='Confirm Password'
            type='password'
            onChange={this.handleChange} />

          <button type='submit'>Signup</button>
      </form>
    );
  }
}

export default Form;
