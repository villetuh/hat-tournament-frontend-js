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

const setToken = token => {
  authorizationHeader = `bearer ${token}`;
};

export default { getAll, create, setToken };