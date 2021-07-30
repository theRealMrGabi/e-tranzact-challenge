import * as types from "../actions/types";

const initialState = {
	loading: false,
};

const AuthReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case types.SIGNUP.REQUEST:
			return { ...state, loading: true, ...payload };

		case types.SIGNUP.SUCCESS:
		case types.SIGNUP.FAILURE:
			return { ...state, loading: false, ...payload };

		default:
			return state;
	}
};

export default AuthReducer;
