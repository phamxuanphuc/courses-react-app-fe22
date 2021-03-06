import * as userTypes from "./user.constans";
import axios from "axios";

export const setCurrentUser = (user) => {
  return {
    type: userTypes.SET_CURRENT_USER,
    payload: user
  }
};

export const getInforUserFromApi = (userAccont, token, callBack) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  axios
    .post(`http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`, { 'taiKhoan': userAccont }, config)
    .then(data => {
      callBack(data.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateInforUser = (newInfor, token, callBack, errCallBack) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  axios
    .put(`http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, newInfor, config)
    .then(data => {
      callBack();
    })
    .catch((error) => {
      errCallBack(error.response.data);
    });
}

export const registerCourses = (obj, token, callBack, errCallBack) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  axios
    .post(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`, obj, config)
    .then(data => {
      callBack();
      console.log(data.data)
    })
    .catch((error) => {
      errCallBack(error.response.data);
      console.log(error.response)
    });
}

export const cancelRegistrationCourses = (obj, token, callBack, errCallBack) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  axios
    .post(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh`, obj, config)
    .then(data => {
      callBack(data.data);
    })
    .catch((error) => {
      errCallBack(error.response.data);
      console.log(error.response)
    });
}


// export const loginUserAction = (data) => {
//   return dispatch => {
//     userApi
//       .loginUser(data)
//       .then(data => console.log(data))
//       .catch(err => console.log(err));
//   };
// };
export const fetchUsers=()=>{
  return{
    type: userTypes.FETCH_USERS
  }
};
export const fetchUsersNext=(page)=>{
  return{
    type: userTypes.FETCH_USERS_NEXT,
    payload: page
  }
};
export const fetchUsersPrev=(page)=>{
  return{
    type: userTypes.FETCH_USERS_PREV,
    payload: page
  }
};
export const fetchUsersSuccess=(users)=>{
  return{
    type: userTypes.FETCH_USERS_SUCCESS,
    payload: users
  }
};
export const fetchUsersFailed=(err)=>{
  return{
    type: userTypes.FETCH_USERS_FAILED,
    padload: err
  }
};
