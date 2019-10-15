import * as userTypes from './user.constans'
const initialState={
    currentUser:null,
    users:[],
    currentPage:1,
    totalPages:null,
    search:null
  };
  const userReducer =(state=initialState, action)=>{
    switch (action.type) {
      case userTypes.SET_CURRENT_USER:
        return{
          ...state,
          currentUser: action.payload
        };
        case userTypes.FETCH_USERS_SUCCESS:
          return{
            ...state,
            users: [...action.payload.items],
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages
          }
          case userTypes.SEARCH_USERS:
            return{
              ...state,
              search: action.payload
            }
      default:
          return {...state}
    }
  };
  export default userReducer;