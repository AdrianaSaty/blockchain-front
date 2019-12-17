import React, { Component } from 'react';
import TableHeader from '../../molecules/TableHeader/TableHeader';
import Modal from '../Modal/Modal';
import('./GameTable.css');

class GameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      gamesList: '',
      homeTeamModal: '',
      awayTeamModal: ''
    }
  }

  showModal = (homeTeam, awayTeam) => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      // FERNANDO: se descomentar esses dois  descomenta a linha 44 e comenta a 43, vai dar problema no loop (acho que a solucao ta perto haha)
      // homeTeamModal: homeTeam,
      // awayTeamModal: awayTeam
    })
  };

  hideModal = () => {
    // this.setState({ show: false });
  };

  render() {
    const { homeTeam, awayTeam, gamesList } = this.props;
    console.log('homeTeam',homeTeam)
    return (

      <div>
        <table className='table table-sm table-dark w-50'>
          <TableHeader />
          <tbody>
            {gamesList.map((game) => {
              return (
                <tr key={game._id}>
                  <td className='align-middle'><button onClick={this.showModal} className={`btn btn-outline-warning`} >BET ON HOME TEAM</button></td>
                  {/* <td className='align-middle'><button onClick={this.showModal(game.homeTeam, game.awayTeam)} className={`btn btn-outline-warning`} >BET ON HOME TEAM</button></td> */}
                  <td className='align-middle'><h5> {game.homeTeam}</h5></td>
                  <td className='align-middle'><h5> x </h5></td>
                  <td className='align-middle'><h5> {game.awayTeam} </h5></td>
                  <td className='align-middle'><button onClick={this.showModal} className={`btn btn-outline-warning`}>BET ON AWAY TEAM</button></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
        <Modal team1={this.state.homeTeamModal} team2={this.state.awayTeamModal} onClose={this.showModal} show={this.state.show} />
      </div>
    )
  };
}

export default GameTable;
