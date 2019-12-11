import React, { Component } from 'react';
import('./GameTable.css');

class GameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1: this.props.team1,
      team2: this.props.team2,
      value1: this.props.value1,
      value2: this.props.value2,

    }
  }

  render() {
    const { team1, team2, value1, value2 } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th><h4> { team1 } </h4></th>
              <th><h4>x</h4></th>
              <th><h4> { team2 } </h4></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><h5> { value1 }</h5></th>
              <th><h5> </h5></th>
              <th><h5> { value2 } </h5></th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GameTable;
