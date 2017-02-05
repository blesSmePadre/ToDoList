import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import root from './reducers';
import App from './components/App';
import configureStore from './store/configureStore';
import * as types from './constants/FilterTypes';
import './styles/App.css'

const initialState = {
  visibilityFilter: types.SHOW_ALL,
  todos: window.__INITIAL_DATA__
};

const store = configureStore(initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
