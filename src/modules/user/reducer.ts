import { createReducer } from 'typesafe-actions';
import { UserState, UserAction } from './types';
import { asyncState } from '../lib/reducerUtils';
import * as actions from './actions';

const initialState: UserState = {
  isLoggedIn: false,
  login: asyncState.initial(),
  user: asyncState.initial(),
};

const reducer = createReducer<UserState, UserAction>(initialState, {
  [actions.LOG_IN_REQUEST]: (state) => ({
    ...state,
    isLoggedIn: false,
    login: asyncState.load(),
  }),
  [actions.LOG_IN_SUCCESS]: (state, action) => {
    localStorage.setItem('token', action.payload.data.token);
    return {
      ...state,
      isLoggedIn: true,
      login: asyncState.success(action.payload),
    };
  },
  [actions.LOG_IN_ERROR]: (state, action) => {
    // localStorage.removeItem('token');
    return {
      ...state,
      isLoggedIn: false,
      login: asyncState.error(action.payload),
    };
  },

  [actions.LOAD_USER_REQUEST]: (state) => ({
    ...state,
    user: asyncState.load(),
  }),
  [actions.LOAD_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      user: asyncState.success(action.payload),
    };
  },
  [actions.LOAD_USER_ERROR]: (state, action) => {
    // localStorage.removeItem('token');
    return {
      ...state,
      user: asyncState.error(action.payload),
    };
  },
});

export default reducer;
