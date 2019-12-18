import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getWalletInfo } from '../../../service/wallet-info-api';
import api from '../../../api/api'
import Loading from '../../molecules/Loading/Loading';
import('./Navbar.css');

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: '',
            logout: '',
            balance: ''
        }
    }

    onClickFuncs = (event) => {
        this.props.logout();
        event.preventDefault();
    }

    async componentDidMount() {
        let walletInfo = await api({
            url: `http://localhost:5000/api/wallets/get-user-wallet-info`,
            method: 'GET',
          });
      
          if (walletInfo.status === 200) {
            this.setState({ balance: walletInfo.data.balance })
          }

    }

    render() {
        return (
            <div className="d-flex justify-content-between">
                <div>
                    <ul className="">
                        <li>
                            <a className="title3 p-2 d-flex" href='/wallet'>
                                Your Balance: $   {this.state.balance ? this.state.balance : <Loading />}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end">
                    {this.props.route === 'home' || this.props.route === 'wallet' ? (
                        <ul className="">
                            <li><a className="title3 p-2" href='/home' >Make a Bet</a></li>
                            <li><a className="title3 p-2" href='/wallet' >Wallet</a></li>
                            <li><a className="title3 p-2" onClick={(event) => this.onClickFuncs(event)} href='/' >Logout</a></li>
                        </ul>
                    ) : (
                            <ul className="">
                                <li><Link className="title3" to="/login">Login</Link></li>
                                <li><a className="title3" href="/signup">Sign Up</a></li>
                            </ul>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;
