import React, { Component } from 'react';
import TableHeader from '../../molecules/TableHeader/TableHeader';
import Modal from '../Modal/Modal';
import('./GameTable.css');

class GameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      homeTeamModal: '',
      awayTeamModal: '',
      teamModal: false
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal = (homeTeam, awayTeam, team) => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      homeTeamModal: homeTeam,
      awayTeamModal: awayTeam,
      teamModal: team
    })
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { gamesList } = this.props;
    return (
      <div>
        <table className='table table-sm table-dark w-50'>
          <TableHeader />
          <tbody>
            {gamesList.map((game) => {
              return (
                <tr key={game._id}>
                  {/* <td className='align-middle'><button onClick={(e) => this.showModal(e)} className={`btn btn-outline-warning`} >BET ON HOME TEAM</button></td> */}
                  <td className='align-middle'><button onClick={() => this.showModal(game.homeTeam, game.awayTeam, true, game._id)} className={`btn btn-outline-warning`} >BET ON HOME TEAM</button></td>
                  <td className='align-middle'><h5> {game.homeTeam}</h5></td>
                  <td className='align-middle'><h5> x </h5></td>
                  <td className='align-middle'><h5> {game.awayTeam} </h5></td>
                  <td className='align-middle'><button onClick={() => this.showModal(game.homeTeam, game.awayTeam, false, game._id)} className={`btn btn-outline-warning`}>BET ON AWAY TEAM</button></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
        <Modal homeTeam={this.state.homeTeamModal} awayTeam={this.state.awayTeamModal} teamModal={this.state.teamModal} onClose={this.showModal} show={this.state.show} />
      </div>
    )
  };
}

export default GameTable;
