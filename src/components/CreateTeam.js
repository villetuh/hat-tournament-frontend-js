import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateTeam = ({ createTeam, tournamentLink }) => {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createTeam({ name: event.target.teamName.value });

    history.push(tournamentLink);
  };

  return (
    <form className='create-team-form' onSubmit={handleFormSubmit} >
      <label>Name:</label>
      <input id='create-team-name'
        name='teamName' />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTeam;
