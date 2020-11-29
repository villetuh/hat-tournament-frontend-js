import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import LoginControls from './components/LoginControls';
import Tournaments from './components/Tournaments';

import { initializeTournaments } from './reducers/tournamentReducer';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.user);

  useEffect(() => {
    dispatch(initializeTournaments());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <LoginControls />
        <div className='Page'>
          <Route path='/tournaments'>
            <Tournaments />
          </Route>
          <Route exact path='/'>
            {currentUser ? <Redirect to='/tournaments' /> : <div className='LandingPage'></div>}
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
