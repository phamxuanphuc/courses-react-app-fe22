import { call, put, takeEvery, delay, takeLatest } from "redux-saga/effects";

// Constans types
import * as userTypes from "../redux/reducers/user/user.constans";
import { STATUS_CODE } from "../constants";

// action call api
import { fetchUsers } from "../apis/api.users";

// action dispatch
import {
  fetchUsersFailed,
  fetchUsersSuccess
} from "../redux/reducers/user/user.action";
import {
  showLoadingUsers,
  hideLoadingUsers
} from "../redux/reducers/ui/ui.action";

function* watchUserAction() {
  yield put(showLoadingUsers());
  const res = yield call(fetchUsers, 1, 7);
  const { status, data } = res;
  if (status === STATUS_CODE.SECCESS) {
    yield put(fetchUsersSuccess(data));
  } else {
    yield put(fetchUsersFailed());
  }
  yield delay(1000);
  yield put(hideLoadingUsers());
}
function* watchUserPageAction(action) {
  yield put(showLoadingUsers());
  const page = action.payload;
  const res = yield call(fetchUsers, page, 7);
  const { status, data } = res;
  if (status === STATUS_CODE.SECCESS) {
    yield put(fetchUsersSuccess(data));
  } else {
    yield put(fetchUsersFailed());
  }
  yield delay(1000);
  yield put(hideLoadingUsers());
}

function* rootSaga() {
  yield takeEvery(userTypes.FETCH_USERS, watchUserAction);
  yield takeLatest(userTypes.FETCH_USERS_NEXT, watchUserPageAction);
  yield takeLatest(userTypes.FETCH_USERS_PREV, watchUserPageAction);
}
export default rootSaga;
