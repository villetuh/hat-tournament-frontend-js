import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createPlayer, deletePlayer, initializePlayers } from '../reducers/playerReducer';
import { createPlayerPool, deletePlayerPool, initializePlayerPools } from '../reducers/playerPoolReducer';

import CreatePlayer from './CreatePlayer';
import Players from './Players';

import CreatePlayerPool from './CreatePlayerPool';
import PlayerPools from './PlayerPools';

const Tournament = () => {
  const tournamentId = useParams().id;

  const dispatch = useDispatch();
  const tournament = useSelector(state => state.tournaments.find(tournament => tournament.id === tournamentId));
  const players = useSelector(state => state.players);
  const playerPools = useSelector(state => state.playerPools);

  useEffect(() => {
    if (tournament) {
      dispatch(initializePlayers(tournament));
      dispatch(initializePlayerPools(tournament));
    }
  }, [tournament]);

  const handleCreatePlayer = (player) => {
    dispatch(createPlayer(tournament, player));
  };

  const handleDeletePlayer = (player) => {
    dispatch(deletePlayer(tournament, player));
  };

  const handleCreatePlayerPool = (playerPool) => {
    dispatch(createPlayerPool(tournament, playerPool));
  };

  const handleDeletePlayerPool = (playerPool) => {
    dispatch(deletePlayerPool(tournament, playerPool));
  };

  return (
    <div>
      { tournament &&
        <div className='tournamentPage'>
          <h2>{tournament.name}</h2>
          { players &&
            <div>
              <h3>Players</h3>
              <CreatePlayer createPlayer={handleCreatePlayer} tournamentLink={`/tournaments/${tournament.id}`} />
              <Players players={players} deletePlayer={handleDeletePlayer} />
            </div>
          }
          { playerPools &&
            <div>
              <h3>PlayerPools</h3>
              <CreatePlayerPool createPlayerPool={handleCreatePlayerPool} tournamentLink={`/tournaments/${tournament.id}`} />
              <PlayerPools playerPools={playerPools} deletePlayerPool={handleDeletePlayerPool} />
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Tournament;
