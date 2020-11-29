import tournamentService from '../services/tournaments';

const playerReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_PLAYER':
      return [...state, action.data];
    case 'INIT_PLAYERS':
      return action.data;
    case 'REMOVE_PLAYER':
      return state.filter(player => player.id !== action.data.id);
    default:
      return state;
  }
};

export const initializePlayers = (tournament) => {
  return async dispatch => {
    const players = await tournamentService.getPlayers(tournament);

    dispatch({
      type: 'INIT_PLAYERS',
      data: players
    });
  };
};

export const createPlayer = (tournament, player) => {
  return async dispatch => {
    const newPlayer = await tournamentService.createPlayer(tournament, player);

    dispatch({
      type: 'NEW_PLAYER',
      data: newPlayer
    });
  };
};

export const deletePlayer = (tournament, player) => {
  return async dispatch => {
    await tournamentService.removePlayer(tournament, player);

    dispatch({
      type: 'REMOVE_PLAYER',
      data: player
    });
  };
};

export default playerReducer;
