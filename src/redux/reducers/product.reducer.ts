import * as types from "../actions/types";

const initialState = {
	loading: false,
	products: [],
};

const ProductReducer = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case types.GET_ALL_PRODUCTS.REQUEST:
			return { ...state, loading: true };

		case types.GET_ALL_PRODUCTS.SUCCESS:
		case types.GET_ALL_PRODUCTS.FAILURE:
			return { ...state, loading: false, ...payload };

		default:
			return state;
	}
};

export default ProductReducer;
