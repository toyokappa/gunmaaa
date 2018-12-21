import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import Router from './Router';
import { BaseStyles } from './constants/styles';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

render(
  <>
    <BaseStyles />
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
