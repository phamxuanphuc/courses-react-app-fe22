import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root.reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk,sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
