import tournamentService from '../services/tournaments';

const teamReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TEAM':
      return [...state, action.data];
    case 'INIT_TEAMS':
      return action.data;
    case 'REMOVE_TEAM':
      return state.filter(team => team.id !== action.data.id);
    default:
      return state;
  }
};

export const initializeTeams = (tournament) => {
  return async dispatch => {
    const teams = await tournamentService.getTeams(tournament);

    dispatch({
      type: 'INIT_TEAMS',
      data: teams
    });
  };
};

export const createTeam = (tournament, team) => {
  return async dispatch => {
    const newTeam = await tournamentService.createTeam(tournament, team);

    dispatch({
      type: 'NEW_TEAM',
      data: newTeam
    });
  };
};

export const deleteTeam = (tournament, team) => {
  return async dispatch => {
    await tournamentService.removeTeam(tournament, team);

    dispatch({
      type: 'REMOVE_TEAM',
      data: team
    });
  };
};

export default teamReducer;
