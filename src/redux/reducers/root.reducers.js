import {combineReducers} from "redux";

import users from "./user/user.reducer";
import courses from "./courses/courses.reducer";
import cateloriesSelected from "./courses/cateloriesSelected.reducer";

const rootReducer = combineReducers({
    users,
    courses,
    cateloriesSelected,
});
export default rootReducer;