import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteTournament } from '../reducers/tournamentReducer';

const Tournaments = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector(state => state.tournaments);

  const handleDeleteTournament = (tournament) => {
    dispatch(deleteTournament(tournament));
  };

  return (
    <div>
      <h2>Tournaments</h2>
      <Link to='/tournaments/add'>Create</Link>
      {
        tournaments
          .map(tournament =>
            <div key={tournament.id}>
              <div>{tournament.name}<button onClick={() => handleDeleteTournament(tournament)}>Delete</button></div>
            </div>)
      }
    </div>
  );
};

export default Tournaments;
