import tournamentService from '../services/tournaments';

const tournamentReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TOURNAMENT':
      return [...state, action.data];
    case 'INIT_TOURNAMENTS':
      return action.data;
    default:
      return state;
  }
};

export const initializeTournaments = () => {
  return async dispatch => {
    const tournaments = await tournamentService.getAll();
    dispatch({
      type: 'INIT_TOURNAMENTS',
      data: tournaments
    });
  };
};

export const createTournament = (tournament) => {
  return async dispatch => {
    const newTournament = await tournamentService.create(tournament);
    dispatch({
      type: 'NEW_TOURNAMENT',
      data: newTournament
    });
  };
};

export default tournamentReducer;