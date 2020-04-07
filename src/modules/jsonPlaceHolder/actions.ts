import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Post } from '../../api/jsonplaceholder';

export const GET_POSTS = 'jsonPlaceHolder/GET_POSTS' as const;
export const GET_POSTS_SUCCESS = 'jsonPlaceHolder/GET_POSTS_SUCCESS' as const;
export const GET_POSTS_ERROR = 'jsonPlaceHolder/GET_POSTS_ERROR' as const;

export const getPostsAsync = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
)<null, Post[], AxiosError>();

export const GET_POST = 'jsonPlaceHolder/GET_POST' as const;
export const GET_POST_SUCCESS = 'jsonPlaceHolder/GET_POST_SUCCESS' as const;
export const GET_POST_ERROR = 'jsonPlaceHolder/GET_POST_ERROR' as const;

export const getPostAsync = createAsyncAction(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
)<string, Post, AxiosError>();
