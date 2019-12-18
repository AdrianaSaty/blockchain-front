import React, { Component } from 'react';
import api from '../../../api/api';
import Navbar from '../../organisms/Navbar/Navbar';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletBalance: '',
      amount: '',
      sendMessage: '',
      bets: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async componentDidMount() {
    const response = await api({
      url: `${process.env.REACT_APP_BLOCKCHAIN_LOGIN_API}/bets/get-bets`,
      method: 'GET',
    })

    if (response.status === 200) {
      this.setState({
        bets: response.data,
      })
    }
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit= async (event) => {
    const { amount } = this.state;
    event.preventDefault();

    if (!amount) {
      this.setState({
        sendMessage: 'Please insert amount to load'
      })
      return;
    }

    const response = await api({
      url: `${process.env.REACT_APP_BLOCKCHAIN_LOGIN_API}/wallets/load-balance`,
      method: 'POST',
      data: { amount }
    });

    if (response.status === 200) {
      this.setState({
        sendMessage: 'Wallet balance updated successfully'
      })
    }

  }

  render() {
    console.log(this.state.bets)
    const { sendMessage } = this.state;
    const { route, logout } = this.props;
    return (
      <div>
        <Navbar route={route} logout={logout} />
        <div>
        <div className="">
                    <div className="container ">
                        <div className="row line">
                            <div className="col-4 p-0 ">
                                <div className="">
                                    <h2 className="mt-5 txt-center">
                                        Last Bets:
                                    </h2>

                                </div>
                            </div>

                            <div className="col-4 p-0">
                                <div>
                                    <h2 className="mt-5 txt-center">
                                        Deposit:
                                    </h2>
                                    <form onSubmit={(event) => this.handleSubmit(event)}>
                                      <input
                                        className='form-control'
                                        name='amount'
                                        placeholder='$0.00'
                                        value={this.state.amount}
                                        type='number'
                                        onChange={(event) => this.handleChange(event)} />
                                    </form>
                                    <h4>{sendMessage}</h4>
                                </div>
                            </div>

                            <div className="col-4 p-0">
                                <div className="">
                                    <h2 className="mt-5 txt-center">
                                        Current Bets:
                                     </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

     
      </div>
    )
  }
}

export default Wallet;
