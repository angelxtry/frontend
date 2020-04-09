import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../lib/reducerUtils';
import * as actions from './actions';
import { LoginResponse, UserResponse } from '../../api/userApi';

export type UserState = {
  isLoggedIn: boolean;
  login: AsyncState<LoginResponse, Error>;
  user: AsyncState<UserResponse, Error>;
};

export type UserAction = ActionType<typeof actions>;
