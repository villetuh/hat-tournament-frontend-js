import React from 'react';

import { nameSorter } from '../utils/sorters';

import { Column, ColumnItem, ColumnDeleteButton } from './styled/lib';

const Players = ({ players, deletePlayer }) => {

  return (
    <Column style={{ marginTop: 20 }}>
      {
        players && players.sort(nameSorter)
          .map(player =>
            <ColumnItem key={player.id} style={{ display: 'flex' }}>
              {player.name}<ColumnDeleteButton style={{ marginLeft: 'auto' }}onClick={() => deletePlayer(player)}>Delete</ColumnDeleteButton>
            </ColumnItem>)
      }
    </Column>
  );
};

export default Players;
