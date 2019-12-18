import React, { Component } from 'react';
// import BetForm from '../BetForm/BetForm';
import Modal from '../../organisms/Modal/Modal';

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBetForm: false,
    }
  }

  handleClick = (event) => {
    this.setState({
      showBetForm: true,
    })
  }

  render() {
    const { homeTeam, awayTeam } = this.props;
    const { showBetForm } = this.state;
    return (
        <tr>
          <td className='align-middle'><button onClick={(event) => this.handleClick(event)} className={`btn btn-outline-warning`} >BET ON HOME TEAM</button></td>
          {
            showBetForm ? <Modal team1={homeTeam} team2={awayTeam} /> : (<></>)
          }
          <td className='align-middle'><h5> {homeTeam}</h5></td>
          <td className='align-middle'><h5> x </h5></td>
          <td className='align-middle'><h5> {awayTeam} </h5></td>
          <td className='align-middle'><button className={`btn btn-outline-warning`}>BET ON AWAY TEAM</button></td>
        </tr>
    )
  }
}

export default TableData;
