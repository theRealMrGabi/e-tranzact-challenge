import * as types from "./types";
import axios from "utils/axios";
import { showToast } from "utils";
import { Dispatch } from "redux";

export const GetAllProducts = () => {
	return (page: number = 1, successCallback?: any, errorCallback?: any) => (
		dispatch: Dispatch
	) => (
		// eslint-disable-next-line
		dispatch({ type: types.GET_ALL_PRODUCTS.REQUEST }),
		axios.request(
			"GET",
			`product/all?limit=8&page=${page}`,
			(res: any) => {
				const payload = {
					products: res?.data,
					totalItems: res?.totalElements,
				};
				dispatch({ type: types.GET_ALL_PRODUCTS.SUCCESS, payload });
				successCallback?.();
			},
			(err: any) => {
				dispatch({ type: types.GET_ALL_PRODUCTS.FAILURE });
				showToast(err.message, "error");
				errorCallback?.();
			}
		),
		page
	);
};
