import { fork,call, put, takeEvery, delay, takeLatest } from "redux-saga/effects";

// Constans types
import * as userTypes from "../redux/reducers/user/user.constans";
import { STATUS_CODE } from "../constants";

// action call api
import { fetchUsers, deleteUsers } from "../apis/api.users";

// action dispatch
import {
  fetchUsersFailed,
  fetchUsersSuccess
} from "../redux/reducers/user/user.action";
import {
  showLoadingUsers,
  hideLoadingUsers
} from "../redux/reducers/ui/ui.action";

// Notify
import {notifySuccess, notifyError} from '../helper/notifyHelper'
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
  const { page, search } = action.payload;
  let res;
  if (search) {
    res = yield call(fetchUsers, page, 7, search);
  } else {
    res = yield call(fetchUsers, page, 7);
  }
  const { status, data } = res;
  if (status === STATUS_CODE.SECCESS) {
    yield put(fetchUsersSuccess(data));
  } else {
    yield put(fetchUsersFailed());
  }
  yield delay(500);
  yield put(hideLoadingUsers());
}

function* watchSearchUsers(action) {
  yield delay(500);
  yield put(showLoadingUsers());
  const username = action.payload;
  let res;
  if (username.length) {
    res = yield call(fetchUsers, 1, 7, username);
  } else {
    res = yield call(fetchUsers, 1, 7);
  }
  const { status, data } = res;
  if (status === STATUS_CODE.SECCESS) {
    yield put(fetchUsersSuccess(data));
  } else {
    yield put(fetchUsersFailed(status));
  }
  yield delay(500);
  yield put(hideLoadingUsers());
}

function* watchDeleteUserAction(action) {
  yield put(showLoadingUsers());
  const {username} = action.payload;
  const res = yield call(deleteUsers, username);
  const { status } = res;
  if (status === STATUS_CODE.SECCESS) {
    yield call(notifySuccess,'👌 Delete user success!')
   
  } else {
    yield call(notifyError,'💩 Delete user failure!') 
  }
  yield fork(watchUserPageAction, action)
  yield delay(500);
  yield put(hideLoadingUsers());
}

function* userSaga() {
  yield takeEvery(userTypes.FETCH_USERS, watchUserAction);
  yield takeEvery(userTypes.DELETE_USERS, watchDeleteUserAction);
  yield takeLatest(userTypes.FETCH_USERS_NEXT, watchUserPageAction);
  yield takeLatest(userTypes.FETCH_USERS_PREV, watchUserPageAction);
  yield takeLatest(userTypes.SEARCH_USERS, watchSearchUsers);
}

export default userSaga;
