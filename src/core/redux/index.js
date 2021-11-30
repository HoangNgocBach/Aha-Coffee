import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistCombineReducers, persistStore} from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers/index'; // where reducers is a object of reducers
// import sagas from './sagas/index';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const config = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
  transforms: [],
  debug: true, //to get useful logging
};

const middleware = [];
// const sagaMiddleware = createSagaMiddleware();

// middleware.push(sagaMiddleware);

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = {enhancers};
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig);
const configureStore = () => {
  return {persistor, store};
};

// sagaMiddleware.run(sagas);

export default configureStore;
