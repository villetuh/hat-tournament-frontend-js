import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Tournament = () => {
  const tournamentId = useParams().id;
  const tournament = useSelector(state => state.tournaments.find(tournament => tournament.id === tournamentId));

  return (
    <div className='tournamentPage'>
      <h2>{tournament.name}</h2>
    </div>
  );
};

export default Tournament;
