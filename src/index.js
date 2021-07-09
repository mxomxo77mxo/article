import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';

import reducers from './store/reducers';
import watchers from "./store/watchers";
import App from './App';

const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(saga))
);
window.store = store;

saga.run(watchers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
