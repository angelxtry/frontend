import { createReducer } from 'typesafe-actions';
import { PostsState, PostsAction } from './types';
import { asyncState } from '../lib/reducerUtils';
import * as actions from './actions';

const initialState: PostsState = {
  posts: asyncState.initial(),
  post: asyncState.initial(),
};

const posts = createReducer<PostsState, PostsAction>(initialState, {
  [actions.GET_POSTS]: (state) => ({
    ...state,
    posts: asyncState.load(),
  }),
  [actions.GET_POSTS_SUCCESS]: (state, action) => ({
    ...state,
    posts: asyncState.success(action.payload),
  }),
  [actions.GET_POSTS_ERROR]: (state, action) => ({
    ...state,
    posts: asyncState.error(action.payload),
  }),
  // /////////////////
  [actions.GET_POST]: (state) => ({
    ...state,
    post: asyncState.load(),
  }),
  [actions.GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    post: asyncState.success(action.payload),
  }),
  [actions.GET_POST_ERROR]: (state, action) => ({
    ...state,
    post: asyncState.error(action.payload),
  }),
});

export default posts;
