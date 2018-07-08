import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpics from './epics/rootEpics';
import rootReducer from './reducers/rootReducer';
import socketMiddleware from './middlewares/socket';

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(epicMiddleware, socketMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

epicMiddleware.run(rootEpics);

export default store;