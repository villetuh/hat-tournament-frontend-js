import React from 'react';
import { useHistory } from 'react-router-dom';

import { SecondaryButton, TextInput } from './styled/lib';

const CreateTeam = ({ createTeam, tournamentLink }) => {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createTeam({ name: event.target.teamName.value });

    event.target.teamName.value = '';
    history.push(tournamentLink);
  };

  return (
    <form className='create-team-form' onSubmit={handleFormSubmit} >
      <label>Name:</label>
      <TextInput id='create-team-name'
        name='teamName' />
      <SecondaryButton type="submit">Add</SecondaryButton>
    </form>
  );
};

export default CreateTeam;
