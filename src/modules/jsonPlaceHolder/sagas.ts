import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_POSTS, getPostsAsync, getPostAsync, GET_POST } from './actions';
import { Post, getPosts, getPost } from '../../api/jsonplaceholder';

function* getPostsSaga() {
  try {
    // console.log('getPostsSaga');
    const posts: Post[] = yield call(getPosts);
    // console.log('getPostsSaga: ', posts);
    yield put(getPostsAsync.success(posts));
  } catch (e) {
    yield put(getPostsAsync.failure(e));
  }
}

function* getPostSaga(action: ReturnType<typeof getPostAsync.request>) {
  try {
    const post: Post = yield call(getPost, action.payload);
    yield put(getPostAsync.success(post));
  } catch (e) {
    yield put(getPostAsync.failure(e));
  }
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsSaga);
}

export function* postSaga() {
  yield takeLatest(GET_POST, getPostSaga);
}
