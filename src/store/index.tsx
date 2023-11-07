// You probably already import createStore from 'redux'
// You'll need to also import applyMiddleware
import {applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';

// Import the `thunk` middleware
import thunk from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your existing root reducer here.
// Change this path to fit your setup!
import rootReducer from '../reducers';

// The last argument to createStore is the "store enhancer".
// Here we use applyMiddleware to create that based on
// the thunk middleware.

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
