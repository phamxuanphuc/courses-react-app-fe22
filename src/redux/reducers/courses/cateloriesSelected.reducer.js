import * as Types from './courses.constans.js';
const initialState = "";

const cateloriesSelectedReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.CATELORIES_SELECTED:
            return action.payload;
        
        default: return state;
    }
}

export default cateloriesSelectedReducer;