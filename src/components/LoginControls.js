import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import loginService from '../services/login';
import tournamentService from '../services/tournaments';

import { clearCurrentUser, setCurrentUser } from '../reducers/userReducer';

import Login from './Login';
import Logout from './Logout';

const Container = styled.div`
  margin-left: auto;
  font-family: ${props => props.theme.fonts.title.fontFamily};
  font-weight: ${props => props.theme.fonts.title.fontWeight};
`;

const LoginControl = () => {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.user);

  const loggedInUserStorageKey = 'loggedInHatAppUser';

  useEffect(() => {
    const storedUserJSON = window.localStorage.getItem(loggedInUserStorageKey);
    if (storedUserJSON === null) {
      history.push('/');
      return;
    }

    const user = JSON.parse(storedUserJSON);
    const userId = JSON.parse(atob(user.token.split('.')[1])).id;
    dispatch(setCurrentUser(userId, user));

    tournamentService.setToken(user.token);

  }, [dispatch]);

  const loginUser = async (username, password) => {
    let success = false;
    try {
      const user = await loginService.login({ username, password });
      const userId = JSON.parse(atob(user.token.split('.')[1])).id;
      tournamentService.setToken(user.token);
      dispatch(setCurrentUser(userId, user));

      window.localStorage.setItem(loggedInUserStorageKey, JSON.stringify(user));

      success = true;
      if (location.pathname === '/') {
        history.push('/tournaments');
      }
    } catch (exception) {
      console.log('Wrong credentials');
    }

    return success;
  };

  const logoutUser = () => {
    window.localStorage.removeItem(loggedInUserStorageKey);
    dispatch(clearCurrentUser());
    tournamentService.setToken(null);

    history.push('/');
  };

  return (
    <Container>
      { currentUser === null
        ? <Login loginUser={loginUser} />
        : <Logout name={currentUser.username} logoutUser={logoutUser} />
      }
    </Container>
  );
};

export default LoginControl;