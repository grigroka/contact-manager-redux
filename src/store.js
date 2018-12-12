import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Init initial state
const initialState = {};

// Array of middlewares
const middleware = [thunk];

// Init store. Use compose to apply middleware and redux dev tools
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
  )
);

export default store;
