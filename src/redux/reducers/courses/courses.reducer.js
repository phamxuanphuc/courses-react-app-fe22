import * as Types from './courses.constans.js';
const initialState = [];

const coursesReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.GET_COURSES_FROM_API:
            return action.payload;
        
        default: return state;
    }
}

export default coursesReducer;