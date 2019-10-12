import axiosService from "../axios-service";
import { API_ENDPOINT } from "./api.constants";

const url = "QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang";

export const fetchUsers = (page, pageSize) => {
  return axiosService
    .get(
      `${API_ENDPOINT}${url}`,
      { MaNhom: "GP02", page: page, pageSize: pageSize },
      res => res
    )
    .catch(err => console.log(err));
};
