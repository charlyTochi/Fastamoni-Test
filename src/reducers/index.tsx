import {combineReducers} from 'redux';

import authReducer from './auth';
import homeReducer from './home';
import profileReducer from './profile';

const appReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  profile: profileReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    // eslint-disable-next-line
    state = undefined;
  }
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
