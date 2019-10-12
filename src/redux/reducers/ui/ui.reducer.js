import * as uiTypes from "./ui.constans";
const initialState = {
  loadingStatus: true
};
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.SHOW_LOADING:
      return {
        ...state,
        loadingStatus: true
      };
      case uiTypes.HIDE_LOADING:
          return{
              ...state,
              loadingStatus: false
          }
    default:
      return { ...state };
  }
};
export default uiReducer