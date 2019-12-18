import React from 'react';

const TableHeader = () => {
  return (
    <thead className='align-middle'>
      <tr >
        <th></th>
        <th><h2>Home Team</h2></th>
        <th className="thMiddle"></th>
        <th><h2>Away Team</h2></th>
        <th></th>
      </tr>
    </thead>
  )
}

export default TableHeader;
