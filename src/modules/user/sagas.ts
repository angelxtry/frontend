import { takeLatest, call, put } from 'redux-saga/effects';
import { LOG_IN_REQUEST, loginAsync, LOAD_USER_REQUEST, loadUserAsync } from './actions';
import { login, UserResponse, LoginResponse, me } from '../../api/userApi';

function* getLoginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    const loginResponse: LoginResponse = yield call(login, action.payload);
    yield put(loginAsync.success(loginResponse));
  } catch (e) {
    yield put(loginAsync.failure(e));
  }
}

export function* loginSaga() {
  yield takeLatest(LOG_IN_REQUEST, getLoginSaga);
}

function* loadUser() {
  try {
    const userResponse: UserResponse = yield call(me);
    yield put(loadUserAsync.success(userResponse));
  } catch (e) {
    yield put(loadUserAsync.failure(e));
  }
}

export function* loadUserSaga() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
