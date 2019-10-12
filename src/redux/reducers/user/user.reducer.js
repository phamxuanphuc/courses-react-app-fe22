import * as Types from './user.constans.js';
const initialState = {};

  const userReducer =(state=initialState, action)=>{
    switch (action.type) {
      case Types.SET_CURRENT_USER:
        return action.payload
      
        default: return state;
    }
  };
  export default userReducer;