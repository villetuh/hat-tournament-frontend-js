import tournamentService from '../services/tournaments';

const playerReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_PLAYERS':
      return action.data;
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

export default playerReducer;
