import axios from 'axios';
const baseUrl = '/api/tournaments';

let authorizationHeader = null;

const getAll = async () => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };

  const response = await axios.get(baseUrl, config);
  return response.data;
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

const removeTeam = async (tournament, team) => {
  const config = {
    headers: { Authorization: authorizationHeader }
  };
  const response = await axios.delete(`${baseUrl}/${tournament.id}/teams/${team.id}`, config);
  return response.data;
};

const setToken = token => {
  authorizationHeader = `bearer ${token}`;
};

export default {
  getAll, create, remove,
  getPlayers, createPlayer, removePlayer,
  getPlayerPools, createPlayerPool, removePlayerPool,
  getTeams, createTeam, removeTeam,
  setToken };
