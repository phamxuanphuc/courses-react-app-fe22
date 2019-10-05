import {combineReducers} from "redux";

import users from "./user/user.reducer";
import courses from "./courses/courses.reducer";
import cateloriesSelected from "./courses/cateloriesSelected.reducer";
import catelories from "./courses/catelories.reducer"

const rootReducer = combineReducers({
    users,
    courses,
    cateloriesSelected,
    catelories
});
export default rootReducer;