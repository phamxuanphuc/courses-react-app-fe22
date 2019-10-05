import * as userTypes from "./user.constans";
// import * as userApi from "../../../apis/auth.api";
import axios from "axios";

export const setCurrentUser = user => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
});

export const getInforUserFromApi = (userAccont, token, callBack) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  axios
    .post(`http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`, {'taiKhoan': userAccont}, config )
    .then(data => {
      callBack(data.data);
    })
    .catch(err => {
      console.log(err);
    });
};
// export const loginUserAction = (data) => {
//   return dispatch => {
//     userApi
//       .loginUser(data)
//       .then(data => console.log(data))
//       .catch(err => console.log(err));
//   };
// };
