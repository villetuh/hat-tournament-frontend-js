import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { initializePlayers } from '../reducers/playerReducer';

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

  return (
    <div>
      { tournament &&
        <div className='tournamentPage'>
          <h2>{tournament.name}</h2>
          { players && <Players players={players} /> }
        </div>
      }
    </div>
  );
};

export default Tournament;
