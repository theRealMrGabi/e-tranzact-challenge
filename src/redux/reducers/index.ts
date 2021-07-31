import { combineReducers } from "redux";

import Auth from "./auth.reducer";
import product from "./product.reducer";

const rootReducer = combineReducers({
	Auth,
	product,
});

export default rootReducer;
