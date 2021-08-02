import * as types from "../actions/types";

const initialState = {
	modalVisibility: false,
};

const UtilsReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case types.CLOSE_MODAL.SUCCESS:
		case types.OPEN_MODAL.SUCCESS:
			return { ...state, modalVisibility: payload };

		default:
			return state;
	}
};

export default UtilsReducer;
