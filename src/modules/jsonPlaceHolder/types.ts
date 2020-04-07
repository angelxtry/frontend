import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../lib/reducerUtils';
import { Post } from '../../api/jsonplaceholder';
import * as actions from './actions';

export type PostsState = {
  posts: AsyncState<Post[], Error>;
  post: AsyncState<Post, Error>;
};

export type PostsAction = ActionType<typeof actions>;
