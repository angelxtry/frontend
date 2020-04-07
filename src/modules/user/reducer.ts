import { createReducer } from 'typesafe-actions';
import { UserState, UserAction } from './types';
import { asyncState } from '../lib/reducerUtils';
import * as actions from './actions';

const initialState: UserState = {
  userResponse: asyncState.initial(),
};

const reducer = createReducer<UserState, UserAction>(initialState, {
  [actions.LOG_IN_REQUEST]: (state) => ({
    ...state,
    userResponse: asyncState.load(),
  }),
  [actions.LOG_IN_SUCCESS]: (state, action) => ({
    ...state,
    userResponse: asyncState.success(action.payload),
  }),
  [actions.LOG_IN_ERROR]: (state, action) => ({
    ...state,
    userResponse: asyncState.error(action.payload),
  }),
});

export default reducer;
