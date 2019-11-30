import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthDate: new Date().toLocaleDateString(),
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
    let value;

    if (name === 'birthDate') {
      value = new Date(target.value).toLocaleDateString();
    } else {
      value = target.value;
    }

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
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input
            name='firstName'
            type='text'
            onChange={this.handleChange} />
        </label>
        <label>
          Last Name
          <input
            name='lastName'
            type='text'
            onChange={this.handleChange} />
        </label>
        <label>
          Birth Date
          <input
            name='birthDate'
            type='date'
            onChange={this.handleChange} />
        </label>
        <label>
          Email
          <input
            name='email'
            type='email'
            onChange={this.handleChange} />
        </label>
        <label>
          Password
          <input
            name='password'
            type='password'
            onChange={this.handleChange} />
        </label>
        <label>
          Confirm Password
          <input
            name='confirmPassword'
            type='password'
            onChange={this.handleChange} />
        </label>

      </form>
    );
  }
}

export default Form;
