import React from 'react';

const PlayerPools = ({ playerPools, deletePlayerPool }) => {

  return (
    <div>
      {
        playerPools && playerPools
          .map(playerPool =>
            <div key={playerPool.id}>
              <div>{playerPool.name}<button onClick={() => deletePlayerPool(playerPool)}>Delete</button></div>
            </div>)
      }
    </div>
  );
};

export default PlayerPools;
