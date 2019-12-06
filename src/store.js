import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

const initialState = {};

const rootReducer = (state = initialState, action) => reducers(state, action);


const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
