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
      gamePublicKey: '',
      gameId: '',
      teamModal: false
    }
    this.showModal = this.showModal.bind(this);
  }

  showModal = (homeTeam, awayTeam, team, gamePublicKey, gameId ) => {
    console.log(gameId)
    this.setState({
      ...this.state,
      show: !this.state.show,
      homeTeamModal: homeTeam,
      awayTeamModal: awayTeam,
      gamePublicKey,
      gameId,
      teamModal: team
    })
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { homeTeamModal, awayTeamModal, teamModal, gamePublicKey, gameId, show } = this.state;
    const { gamesList } = this.props;
    console.log(gamesList);
    return (
      <div>
        <table className='table table-sm table-dark w-75'>
          <TableHeader />
          <tbody>
            {gamesList.map((game) => {
              return (
                <tr key={game._id}>
                  {/* <td className='align-middle'><button onClick={(e) => this.showModal(e)} className={`btn btn-outline-warning`} >BET ON HOME TEAM</button></td> */}
                  <td className='align-middle'><button onClick={() => this.showModal(game.homeTeam, game.awayTeam, true, game.wallet.publicKey, game._id)} className={`btn btn-outline-warning`} >BET ON HOME TEAM</button></td>
                  <td className='align-middle'><h5> {game.homeTeam}</h5></td>
                  <td className='align-middle'><h5> x </h5></td>
                  <td className='align-middle'><h5> {game.awayTeam} </h5></td>
                  <td className='align-middle'><button onClick={() => this.showModal(game.homeTeam, game.awayTeam, false, game.wallet.publicKey, game._id)} className={`btn btn-outline-warning`}>BET ON AWAY TEAM</button></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
        <Modal
          homeTeam={homeTeamModal}
          awayTeam={awayTeamModal}
          teamModal={teamModal}
          gamePublicKey={gamePublicKey}
          gameId={gameId}
          onClose={this.showModal}
          show={show} />
      </div>
    )
  };
}

export default GameTable;
