import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loginService from '../services/login';

import { clearCurrentUser, setCurrentUser } from '../reducers/userReducer';

import Login from './Login';
import Logout from './Logout';

const LoginControl = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.user);

  const loggedInUserStorageKey = 'loggedInUser';

  useEffect(() => {
    const storedUserJSON = window.localStorage.getItem(loggedInUserStorageKey);
    if (storedUserJSON === null) {
      return;
    }

    const user = JSON.parse(storedUserJSON);
    const userId = JSON.parse(atob(user.token.split('.')[1])).id;
    dispatch(setCurrentUser(userId, user));

  }, [dispatch]);

  const loginUser = async (username, password) => {
    let success = false;
    try {
      const user = await loginService.login({ username, password });
      const userId = JSON.parse(atob(user.token.split('.')[1])).id;
      dispatch(setCurrentUser(userId, user));

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
  };

  return (
    <span>
      { currentUser === null
        ? <Login loginUser={loginUser} />
        : <Logout name={currentUser.username} logoutUser={logoutUser} />
      }
    </span>
  );
};

export default LoginControl;