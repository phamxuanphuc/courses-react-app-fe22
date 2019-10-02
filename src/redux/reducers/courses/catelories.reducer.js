import * as Types from './courses.constans.js';
const initialState = [];

const cateloriesReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.GET_CATELORIES_FROM_API:
            return action.payload;
        
        default: return state;
    }
}

export default cateloriesReducer;