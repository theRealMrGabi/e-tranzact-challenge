import { combineReducers } from "redux";

import Auth from "./auth.reducer";

const rootReducer = combineReducers({
	Auth,
});

export default rootReducer;
