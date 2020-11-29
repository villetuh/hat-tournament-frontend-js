import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Tournaments = () => {
  const tournaments = useSelector(state => state.tournaments);

  return (
    <div>
      <h2>Tournaments</h2>
      <Link to='/tournaments/add'>Create</Link>
      {
        tournaments
          .map(tournament =>
            <div key={tournament.id}>
              <div>{tournament.name}</div>
            </div>)
      }
    </div>
  );
};

export default Tournaments;
