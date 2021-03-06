import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_USER } from './constant';
import { fetchUserApi } from './service'
import { fetchUserSuccess, fetchUserFail } from './action';

export function* fetchUser() {
  try {
    const response = yield call(fetchUserApi);
    yield put(fetchUserSuccess(response.data));
  } catch (err) {
    yield put(fetchUserFail(err));
  }
}

export function* watchFetchUser() {
  yield takeLatest(FETCH_USER, fetchUser)
}
