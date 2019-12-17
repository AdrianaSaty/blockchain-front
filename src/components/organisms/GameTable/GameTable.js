import React from 'react';
import TableHeader from '../../molecules/TableHeader/TableHeader';
import TableData from '../../molecules/TableData/TableData';
import('./GameTable.css');

const GameTable = ({ gamesList }) => {
    return (
      <div>
        <table className='table table-sm table-dark w-50'>
          <TableHeader />
          <tbody>
            {gamesList.map((game) => {
              return <TableData id={game._id} homeTeam={game.homeTeam} awayTeam={game.awayTeam} />
            })
            }
          </tbody>
        </table>
      </div>
    );
}

export default GameTable;
