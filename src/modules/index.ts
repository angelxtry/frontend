import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todos from './todos';
import jsonPlaceHolder from './jsonPlaceHolder';
import userStore from './user';
import { postsSaga, postSaga } from './jsonPlaceHolder/sagas';
import { loginSaga, loadUserSaga } from './user/sagas';

const rootReducer = combineReducers({
  userStore,
  todos,
  jsonPlaceHolder,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postsSaga(), postSaga(), loginSaga(), loadUserSaga()]);
}
