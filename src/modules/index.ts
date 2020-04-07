import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todos from './todos';
import jsonPlaceHolder from './jsonPlaceHolder';
import user from './user';
import { postsSaga, postSaga } from './jsonPlaceHolder/sagas';
import { loginSaga } from './user/sagas';

const rootReducer = combineReducers({
  user,
  todos,
  jsonPlaceHolder,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postsSaga(), postSaga(), loginSaga()]);
}
