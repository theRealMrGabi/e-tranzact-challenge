import { combineReducers } from "redux";

import auth from "./auth.reducer";
import product from "./product.reducer";
import utils from "./utils.reducer";

const rootReducer = combineReducers({
	auth,
	product,
	utils,
});

export default rootReducer;
