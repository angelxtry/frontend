import { takeLatest, call, put } from 'redux-saga/effects';
import { LOG_IN_REQUEST, loginAsync } from './actions';
import { login, UserResponse } from '../../api/user';

function* getLoginSaga(action: ReturnType<typeof loginAsync.request>) {
  try {
    const userResponse: UserResponse = yield call(login, action.payload);
    yield put(loginAsync.success(userResponse));
  } catch (e) {
    yield put(loginAsync.failure(e));
  }
}

export function* loginSaga() {
  yield takeLatest(LOG_IN_REQUEST, getLoginSaga);
}
