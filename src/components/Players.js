import React from 'react';

const Players = ({ players }) => {
  return (
    <div>
      <h3>Players</h3>
      {
        players && players
          .map(player =>
            <div key={player.id}>
              <div>{player.name}</div>
            </div>)
      }
    </div>
  );
};

export default Players;
