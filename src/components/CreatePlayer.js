import React from 'react';
import { useHistory } from 'react-router-dom';

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
      <input id='create-player-name'
        name='playerName' />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreatePlayer;
