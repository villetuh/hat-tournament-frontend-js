import axios from 'axios';

// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_API_URL + '/api/tournaments';

let authorizationHeader = null;

const getAll = async () => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };

  if (authorizationHeader === null) {
    return [];
  }

  try {
    const response = await axios.get(baseUrl, config);
    return response.data;
  } catch (Error) {
    return [];
  }
};

const create = async newTournament  => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };

  const response = await axios.post(baseUrl, newTournament, config);
  return response.data;
};

const remove = async (tournament) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.delete(`${baseUrl}/${tournament.id}`, config);
  return response.data;
};

const getPlayers = async (tournament) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };

  const response = await axios.get(`${baseUrl}/${tournament.id}/players`, config);
  return response.data;
};

const createPlayer = async (tournament, player)  => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.post(`${baseUrl}/${tournament.id}/players`, player, config);
  return response.data;
};

const updatePlayer = async (tournament, player)  => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.put(`${baseUrl}/${tournament.id}/players/${player.id}`, player, config);
  return response.data;
};

const removePlayer = async (tournament, player) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.delete(`${baseUrl}/${tournament.id}/players/${player.id}`, config);
  return response.data;
};

const getPlayerPools = async (tournament) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };

  const response = await axios.get(`${baseUrl}/${tournament.id}/playerpools`, config);
  return response.data;
};

const createPlayerPool = async (tournament, playerPool)  => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.post(`${baseUrl}/${tournament.id}/playerpools`, playerPool, config);
  return response.data;
};

const removePlayerPool = async (tournament, playerPool) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.delete(`${baseUrl}/${tournament.id}/playerpools/${playerPool.id}`, config);
  return response.data;
};

const getTeams = async (tournament) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };

  const response = await axios.get(`${baseUrl}/${tournament.id}/teams`, config);
  return response.data;
};

const createTeam = async (tournament, team)  => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.post(`${baseUrl}/${tournament.id}/teams`, team, config);
  return response.data;
};

const updateTeam = async (tournament, team)  => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.put(`${baseUrl}/${tournament.id}/teams/${team.id}`, team, config);
  return response.data;
};

const removeTeam = async (tournament, team) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.delete(`${baseUrl}/${tournament.id}/teams/${team.id}`, config);
  return response.data;
};

const setToken = token => {
  if (token === null) {
    authorizationHeader = null;
  } else {
    authorizationHeader = `bearer ${token}`;
  }
};

export default {
  getAll, create, remove,
  getPlayers, createPlayer, updatePlayer, removePlayer,
  getPlayerPools, createPlayerPool, removePlayerPool,
  getTeams, createTeam, updateTeam, removeTeam,
  setToken };
