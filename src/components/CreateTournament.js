import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createTournament } from '../reducers/tournamentReducer';

const CreateTournament = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(createTournament({ name: event.target.tournamentName.value }));

    history.push('/tournaments');
  };

  return (
    <form className='create-tournament-form' onSubmit={handleFormSubmit} >
      <label>Name:</label>
      <input id='create-tournament-name'
        name='tournamentName' />
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreateTournament;
