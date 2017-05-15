import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";

const dotoAPP = combineReducers({
	todos,
	visibilityFilter
})

export default todoAPP