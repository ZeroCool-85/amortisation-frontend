import {applyMiddleware, createStore} from 'redux';
import rootReducer from 'store/rootReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/rootSaga';
import {composeWithDevTools} from 'redux-devtools-extension';

const { REACT_APP_ENV } = process.env;

const logger = createLogger({
    collapsed: true,
    timestamp: false,
});

const sagaMiddleware = createSagaMiddleware();

const middleWares = [];

if (REACT_APP_ENV === 'test' || REACT_APP_ENV === 'prod') {
    middleWares.push(sagaMiddleware);
    console.log = function() {};
    console.warn = function() {};
    console.table = function() {};
} else {
    middleWares.push(sagaMiddleware);
    middleWares.push(logger);
}

const store = createStore(rootReducer, (composeWithDevTools(applyMiddleware(...middleWares))));

sagaMiddleware.run(rootSaga);

export { store };
