import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { UserResponse, UserInfo, LoginResponse } from '../../api/userApi';

export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS' as const;
export const LOG_IN_ERROR = 'user/LOG_IN_ERROR' as const;

export const loginAsync = createAsyncAction(
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
)<UserInfo, LoginResponse, AxiosError>();

export const LOAD_USER_REQUEST = 'user/LOAD_USER_REQUEST' as const;
export const LOAD_USER_SUCCESS = 'user/LOAD_USER_SUCCESS' as const;
export const LOAD_USER_ERROR = 'user/LOAD_USER_ERROR' as const;

export const loadUserAsync = createAsyncAction(
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
)<null, UserResponse, AxiosError>();
