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
            .catch(err => { })
    }
}

export const cateloriesSelected = (catelories) => {
    return ({
        type: Types.CATELORIES_SELECTED,
        payload: catelories
    })
}

export const getCateloriesFromApi = () => {
    return(dispatch) => {
        axios
        .get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
        .then((data) => {
            dispatch({
                type: Types.GET_CATELORIES_FROM_API,
                payload: data.data,
            })
        })
        .catch(err => {console.log(err)})
    }
}

export const getCoursesDetailFromApi = (maKhoaHoc, callBack) => {
    axios
    .get(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    .then((data) => {
        callBack(data.data);
    })
    .catch(err => {console.log(err.response)})
}

export const coursesSelected = (maKhoaHoc) => {
    return(dispatch) => {        
        dispatch({
            type: Types.GET_INFOR_COURSES_FROM_API,
            payload: maKhoaHoc
        })
    }
}