import React, { Component } from 'react';
import api from '../../../api/api';
import Navbar from '../../organisms/Navbar/Navbar';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletBalance: '',
      amount: 0,

    }
  }


  async componentDidMount() {
    // let walletBalance = await api({
    //   url: `https://blotting.herokuapp.com/api/load-balance`,
    //   method: 'POST',
    //   data: {
    //     publicKey: '',
    //     amount: 
    //   }
    // });

    // if (walletBalance.status === 200) {
    //   this.setState({ balance: walletBalance.data.balance })
    // }


    // this.setState({
    //   walletBalance: walletBalance.data
    // })
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
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
                                    <input
                                      className='form-control'
                                      name='amount'
                                      placeholder='$0.00'
                                      value={this.state.amount}
                                      type='number'
                                      onChange={(event) => this.handleChange(event)} />
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
