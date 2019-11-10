import { combineReducers } from "redux";
import data from "./reducers/data";
import page from "./reducers/page";

export default combineReducers({
	data,
	page
});
