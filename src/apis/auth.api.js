import axiosService from "../axios-service";
import { API_ENDPOINT } from "./api.constants";

const url = "QuanLyNguoiDung/DangNhap";

export const loginUser = user => {
  return axiosService.post(`${API_ENDPOINT}${url}`, user, (status, data) => {
    localStorage.setItem("user", JSON.stringify(data));
    return status;
  });
};
