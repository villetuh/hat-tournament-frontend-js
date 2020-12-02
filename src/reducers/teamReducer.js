import tournamentService from '../services/tournaments';

const teamReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TEAM':
      return [...state, action.data];
    case 'INIT_TEAMS':
      return action.data;
    case 'REMOVE_TEAM':
      return state.filter(team => team.id !== action.data.id);
    case 'UPDATE_TEAM':
      return state.map(team => team.id === action.data.id ? action.data : team);
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

export const setPlayersToTeam = (tournament, team, players) => {
  return async dispatch => {
    team.players = players.map(player => player.id);
    const updatedTeam = await tournamentService.updateTeam(tournament, team);

    dispatch({
      type: 'UPDATE_TEAM',
      data: updatedTeam
    });

    for (var player of players) {
      dispatch({
        type: 'UPDATE_PLAYER',
        data: {
          ...player,
          team: team.id
        }
      });
    }
  };
};

export default teamReducer;
