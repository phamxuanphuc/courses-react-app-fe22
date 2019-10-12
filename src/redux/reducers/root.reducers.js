import {combineReducers} from "redux";

import users from "./user/user.reducer";
import courses from "./courses/courses.reducer";
import cateloriesSelected from "./courses/cateloriesSelected.reducer";
import catelories from "./courses/catelories.reducer"
import detailCourses from "./courses/CoursesSelected.reducer"
import ui from './ui/ui.reducer'

const rootReducer = combineReducers({
    users,
    courses,
    cateloriesSelected,
    catelories,
    detailCourses,
    ui
});
export default rootReducer;