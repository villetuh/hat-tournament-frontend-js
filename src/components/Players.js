import React from 'react';

const Players = ({ players, deletePlayer }) => {

  return (
    <div>
      {
        players && players
          .map(player =>
            <div key={player.id}>
              <div>{player.name}<button onClick={() => deletePlayer(player)}>Delete</button></div>
            </div>)
      }
    </div>
  );
};

export default Players;
