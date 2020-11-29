import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createPlayer, deletePlayer, initializePlayers } from '../reducers/playerReducer';

import CreatePlayer from './CreatePlayer';
import Players from './Players';

const Tournament = () => {
  const tournamentId = useParams().id;

  const dispatch = useDispatch();
  const tournament = useSelector(state => state.tournaments.find(tournament => tournament.id === tournamentId));
  const players = useSelector(state => state.players);

  useEffect(() => {
    if (tournament) {
      dispatch(initializePlayers(tournament));
    }
  }, [tournament]);

  const handleCreatePlayer = (player) => {
    dispatch(createPlayer(tournament, player));
  };

  const handleDeletePlayer = (player) => {
    dispatch(deletePlayer(tournament, player));
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
        </div>
      }
    </div>
  );
};

export default Tournament;
