import * as courseApi from '../../../api/courses.api';

export const fetchCourses =()=>{
    return dispatch =>{
        courseApi.getCoures()
        .then(data=> console.log(data))
        .catch(err => console.log(err))
    }
}