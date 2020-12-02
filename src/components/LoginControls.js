import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.user);

  const loggedInUserStorageKey = 'loggedInHatAppUser';

  useEffect(() => {
    const storedUserJSON = window.localStorage.getItem(loggedInUserStorageKey);
    if (storedUserJSON === null) {
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
      dispatch(setCurrentUser(userId, user));

      tournamentService.setToken(user.token);

      window.localStorage.setItem(loggedInUserStorageKey, JSON.stringify(user));

      success = true;
    } catch (exception) {
      console.log('Wrong credentials');
    }

    return success;
  };

  const logoutUser = () => {
    window.localStorage.removeItem(loggedInUserStorageKey);
    dispatch(clearCurrentUser());
    tournamentService.setToken('');
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