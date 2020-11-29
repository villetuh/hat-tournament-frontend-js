import tournamentService from '../services/tournaments';

const tournamentReducer = (state = [], action) => {
  switch (action.type) {
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

export default tournamentReducer;