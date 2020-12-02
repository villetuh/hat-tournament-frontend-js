import React from 'react';
import { useHistory } from 'react-router-dom';

import { SecondaryButton, TextInput } from './styled/lib';

const CreatePlayer = ({ createPlayer, tournamentLink }) => {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createPlayer({ name: event.target.playerName.value });

    event.target.playerName.value = '';
    history.push(tournamentLink);
  };

  return (
    <form className='create-player-form' onSubmit={handleFormSubmit} >
      <label>Name:</label>
      <TextInput id='create-player-name'
        name='playerName' />
      <SecondaryButton type="submit">Add</SecondaryButton>
    </form>
  );
};

export default CreatePlayer;
