import axiosService from "../axios-service";
import { API_ENDPOINT } from "./api.constants";

const url = "QuanLyNguoiDung";
const {accessToken}= JSON.parse(localStorage.getItem('user'))
export const fetchUsers = (page, pageSize, username = undefined) => {
  return axiosService
    .get(
      `${API_ENDPOINT}${url}/LayDanhSachNguoiDung_PhanTrang`,
      {
        MaNhom: "GP02",
        tuKhoa: username ? username : undefined,
        page: page,
        pageSize: pageSize
      },
      res => res
    )
    .catch(err => console.log(err));
};

export const deleteUsers = username => {
  return axiosService
    .delete(
      `${API_ENDPOINT}${url}/XoaNguoiDung`,
      {TaiKhoan: username},
      accessToken,
      res => res
    )
    .catch(err => console.log(err));
};
