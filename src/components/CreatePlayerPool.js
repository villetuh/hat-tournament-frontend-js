import React from 'react';
import { useHistory } from 'react-router-dom';

import { SecondaryButton, TextInput } from './styled/lib';

const CreatePlayerPool = ({ createPlayerPool, tournamentLink }) => {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createPlayerPool({ name: event.target.playerPoolName.value });

    event.target.playerPoolName.value = '';
    history.push(tournamentLink);
  };

  return (
    <form className='create-playerpool-form' onSubmit={handleFormSubmit} >
      <label>Name:</label>
      <TextInput id='create-playerpool-name'
        name='playerPoolName' />
      <SecondaryButton type="submit">Add</SecondaryButton>
    </form>
  );
};

export default CreatePlayerPool;
