import Service from "../axios-service";
import { API_ENDPOINT } from "./api.constants";

const url = "/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP02";
export const getCoures = () => {
  return Service.get(`${API_ENDPOINT}/ ${url}`);
};
