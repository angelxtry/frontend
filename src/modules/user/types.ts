import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../lib/reducerUtils';
import * as actions from './actions';
import { UserResponse } from '../../api/user';

export type UserState = {
  userResponse: AsyncState<UserResponse, Error>;
};

export type UserAction = ActionType<typeof actions>;
