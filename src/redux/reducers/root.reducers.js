import {combineReducers} from "redux";

import users from "./user/user.reducer";
import courses from "./courses/courses.reducer";

const rootReducer = combineReducers({
    users,
    courses
});
export default rootReducer;