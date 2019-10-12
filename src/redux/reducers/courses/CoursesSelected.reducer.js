import * as Types from './courses.constans.js';
const initialState = {};

const coursesSelectedReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.GET_INFOR_COURSES_FROM_API:
            return action.payload;
        
        default: return state;
    }
}

export default coursesSelectedReducer;