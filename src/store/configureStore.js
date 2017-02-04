import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import root from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    root,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
