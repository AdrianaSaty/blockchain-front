import React, { Component } from 'react';
import('./Modal.css');


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      teamModal: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e)
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    // const { team1, team2, value1 } = this.state;
    event.preventDefault();
  }

  render() {
    const { homeTeam, awayTeam, value1, teamModal } = this.props;
    if (this.props.show) {
      return null;
    }

    return (
      <div className="backdropStyle">
        <div className="modalStyle">
          <h2 className="txt-center">Your Best Bet</h2>
          {teamModal ? <h5 className="text-center">You are betting on {homeTeam}!</h5> : (<></>)}
          {!teamModal ? <h5 className="text-center">You are betting on {awayTeam}!</h5> : (<></>)}
          
          <form onSubmit={(event) => this.handleSubmit(event)} className='mt-5 login-form d-flex justify-content-center'>
            <div className='w-100'>
              <table>
                <thead>
                  <tr>
                    <th><h4> {homeTeam} </h4></th>
                    <th className="thMiddle"><h4>x</h4></th>
                    <th><h4> {awayTeam} </h4></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                    {teamModal ? <div className=''>
                                    <input
                                      className='form-control'
                                      name='value1'
                                      placeholder='$0.00'
                                      value={value1}
                                      type='text'
                                      onChange={this.handleChange} />
                                  </div> 
                      : (<></>)
                    }
                    </th>
                    <th><h5> </h5></th>
                    <th>
                      {!teamModal ? <div className=''>
                                      <input
                                        className='form-control'
                                        name='value1'
                                        placeholder='$0.00'
                                        value={value1}
                                        type='text'
                                        onChange={this.handleChange} />
                                    </div> 
                        : (<></>)
                      }
                    </th>
                  </tr>
                </tbody>
              </table>
              <div className='w-75 center'>
                <input
                  type='submit' className='mt-5 btn btn-outline-warning btn-lg btn-block'
                  value="Make it!" />
              </div>
            </div>
          </form>
          {this.props.children}
          <span onClick={(e) => { this.onClose(e) }} className="close">&times;</span>
          <div className="footerStype close">
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;