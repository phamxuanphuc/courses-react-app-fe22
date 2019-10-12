import * as Types from './courses.constans.js';
const initialState = [];

const cateloriesReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.ADD_COURSES_TO_CART:
            return action.payload;
        
        default: return state;
    }
}

export default cateloriesReducer;