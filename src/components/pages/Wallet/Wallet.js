import React, { Component } from 'react';
import api from '../../../api/api';
import Navbar from '../../organisms/Navbar/Navbar';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletBalance: ''
    }
  }

  getWalletBalance = async () => {
    const walletBalance = await api({
      method: 'GET',
      url: `${process.env.REACT_APP_BLOCKCHAIN_LOGIN_API}/bets/get-wallet`,
    });
    return walletBalance;
  }

  async componentDidMount() {
    const walletBalance = await this.getWalletBalance();
    this.setState({
      walletBalance: walletBalance.data
    })
  }

  render() {
    const { route, logout } = this.props;
    return (
      <div>
        <Navbar route={route} logout={logout} />
      </div>
    )
  }
}

export default Wallet;
