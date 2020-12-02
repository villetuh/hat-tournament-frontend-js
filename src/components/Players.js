import React from 'react';

import { nameSorter } from '../utils/sorters';

const Players = ({ players, deletePlayer }) => {

  return (
    <div>
      {
        players && players.sort(nameSorter)
          .map(player =>
            <div key={player.id}>
              <div>{player.name}<button onClick={() => deletePlayer(player)}>Delete</button></div>
            </div>)
      }
    </div>
  );
};

export default Players;
