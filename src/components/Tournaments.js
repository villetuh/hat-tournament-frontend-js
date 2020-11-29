import React from 'react';
import { useSelector } from 'react-redux';

const Tournaments = () => {
  const tournaments = useSelector(state => state.tournaments);

  return (
    <div>
      <h2>Tournaments</h2>
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
