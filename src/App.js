import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './components/styled/theme';
import { AppContainer, Page } from './components/styled/lib';

import CreateTournament from './components/CreateTournament';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Tournament from './components/Tournament';
import Tournaments from './components/Tournaments';

import { initializeTournaments } from './reducers/tournamentReducer';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.user);

  useEffect(() => {
    dispatch(initializeTournaments());
  }, [currentUser]);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <Header />
          { currentUser === null &&
            <Page>
              <LandingPage />
            </Page>
          }
          { currentUser &&
            <Page>
              <Switch>
                <Route exact path='/tournaments/add'>
                  <CreateTournament />
                </Route>
                <Route path='/tournaments/:id'>
                  <Tournament />
                </Route>
                <Route path='/tournaments'>
                  <Tournaments />
                </Route>
              </Switch>
              <Route exact path='/'>
                <LandingPage />
              </Route>
            </Page>
          }
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
