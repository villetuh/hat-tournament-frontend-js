import tournamentService from '../services/tournaments';

const playerPoolReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_PLAYERPOOL':
      return [...state, action.data];
    case 'INIT_PLAYERPOOLS':
      return action.data;
    case 'REMOVE_PLAYERPOOL':
      return state.filter(playerPool => playerPool.id !== action.data.id);
    default:
      return state;
  }
};

export const initializePlayerPools = (tournament) => {
  return async dispatch => {
    const playerPools = await tournamentService.getPlayerPools(tournament);

    dispatch({
      type: 'INIT_PLAYERPOOLS',
      data: playerPools
    });
  };
};

export const createPlayerPool = (tournament, playerPool) => {
  return async dispatch => {
    const newPlayerPool = await tournamentService.createPlayerPool(tournament, playerPool);

    dispatch({
      type: 'NEW_PLAYERPOOL',
      data: newPlayerPool
    });
  };
};

export const deletePlayerPool = (tournament, playerPool) => {
  return async dispatch => {
    await tournamentService.removePlayerPool(tournament, playerPool);

    dispatch({
      type: 'REMOVE_PLAYERPOOL',
      data: playerPool
    });
  };
};

export default playerPoolReducer;
