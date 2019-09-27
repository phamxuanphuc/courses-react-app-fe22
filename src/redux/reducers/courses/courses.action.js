import * as Types from './courses.constans';
import axios from 'axios';

export const getCoursesFromApi = () => {
    return (dispatch) => {
        axios
            .get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
            .then((data) => {
                dispatch({
                    type: Types.GET_COURSES_FROM_API,
                    payload: data.data,
                })
            })
            .catch(err => {console.log(err)})
    }
}