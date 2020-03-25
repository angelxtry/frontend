import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import todos from './todos';
import jsonPlaceHolder from './jsonPlaceHolder';
import { postsSaga, postSaga } from './jsonPlaceHolder/sagas';

const rootReducer = combineReducers({
  todos,
  jsonPlaceHolder,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postsSaga(), postSaga()]);
}
