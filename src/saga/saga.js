import {call, put, takeLatest} from 'redux-saga/effects';

import {getPostData} from '../apis/postsAPI';
import { getListPostSuccess } from '../actions/action';


function* getListPostSaga(action) {
  try {
    const data = yield call(getPostData);
    yield put(getListPostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

function* postsSaga() {
  yield takeLatest('GET_LIST_POST', getListPostSaga);
}
export default postsSaga;