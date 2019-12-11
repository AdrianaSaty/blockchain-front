import React, { Component } from 'react';
import api from '../../../api/api';
import ('./LoginForm.css');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitMessage: '',
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

  handleSubmit = async (event) => {
    const { email, password } = this.state; 
    event.preventDefault();

    if (!email || !password) {
      this.setState({
        submitMessage: 'Insert email and password'
      })
      return;
    }

    const response = await api({
      url: `${process.env.REACT_APP_BLOCKCHAIN_LOGIN_API}/users/login`,
      method: 'POST',
      data: this.state
    });

    if (response.status === 200) {
      const token = JSON.stringify(response.data);
      const { authenticateUser, history } = this.props;

      localStorage.setItem('loggedUser', token);
      authenticateUser();
      history.push('/home');
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={(event) => this.handleSubmit(event)} className='login-form d-flex justify-content-center'>
        <div className='w-100'>
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
