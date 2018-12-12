import { createStore, applyMiddleware, compose } from 'redux';
// redux-dev-tools dep necessary
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Init initial state
const initialState = {};

// Array of middlewares
const middleware = [thunk];

// Init store. Use compose to apply middleware and redux dev tools
// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOL_EXTENSION__
//       ? window.__REDUX_DEVTOOL_EXTENSION__()
//       : f => f
//   )
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
