import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { UserResponse, UserInfo } from '../../api/user';

export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS' as const;
export const LOG_IN_ERROR = 'user/LOG_IN_ERROR' as const;

export const loginAsync = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
)<UserInfo, UserResponse, AxiosError>();
