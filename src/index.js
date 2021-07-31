import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // makes the Redux store available to any nested components that need to access the Redux store
import thunkMiddleware from 'redux-thunk'; // allows simple asynchronous use of dispatch
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { requestRobots, searchRobots } from './reducers' // reducer functions
import './index.css';

const logger = createLogger() 

// rootReducers - combine all reducers into a single reducer
const rootReducers = combineReducers({requestRobots, searchRobots})

// createStore(reducer,middleware)
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}> {/* store is passed down as a prop*/}
    <App/>
  </Provider>,
  //  everything App renders will be put into the div with id root
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();