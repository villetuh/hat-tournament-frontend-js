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

const setToken = token => {
  authorizationHeader = `bearer ${token}`;
};

export default { getAll, create, remove, getPlayers, createPlayer, removePlayer, setToken };
