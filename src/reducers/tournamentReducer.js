import tournamentService from '../services/tournaments';

const tournamentReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TOURNAMENT':
      return [...state, action.data];
    case 'INIT_TOURNAMENTS':
      return action.data;
    case 'REMOVE_TOURNAMENT':
      return state.filter(tournament => tournament.id !== action.data.id);
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

export const deleteTournament = (tournament) => {
  return async dispatch => {
    await tournamentService.remove(tournament);

    dispatch({
      type: 'REMOVE_TOURNAMENT',
      data: tournament
    });
  };
};

export default tournamentReducer;