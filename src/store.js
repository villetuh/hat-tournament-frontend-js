import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import playerReducer from './reducers/playerReducer';
import playerPoolReducer from './reducers/playerPoolReducer';
import tournamentReducer from './reducers/tournamentReducer';
import userReducer from './reducers/userReducer';

const store = createStore(
  combineReducers({
    currentUser: userReducer,
    players: playerReducer,
    playerPools: playerPoolReducer,
    tournaments: tournamentReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
