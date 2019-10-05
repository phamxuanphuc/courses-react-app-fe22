import * as userTypes from './user.constans';
import axios from 'axios';

export const setCurrentUser= user=>(
  {
    type: userTypes.SET_CURRENT_USER,
    payload: user
  }
);

export const getInforUserFromApi = (userAccont) => {
  axios
    .get(`http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${userAccont}`)
    .then(data => {
      console.log(data.data);
    })
    .catch(err=>{console.log(err)})
}