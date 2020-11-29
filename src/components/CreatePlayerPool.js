import React from 'react';
import { useHistory } from 'react-router-dom';

const CreatePlayerPool = ({ createPlayerPool, tournamentLink }) => {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createPlayerPool({ name: event.target.playerPoolName.value });

    history.push(tournamentLink);
  };

  return (
    <form className='create-playerpool-form' onSubmit={handleFormSubmit} >
      <label>Name:</label>
      <input id='create-playerpool-name'
        name='playerPoolName' />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePlayerPool;
