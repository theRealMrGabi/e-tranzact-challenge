import * as types from "./types";
import { Dispatch } from "redux";

export const CloseModal = () => {
	return (successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) =>
		dispatch({ type: types.CLOSE_MODAL.SUCCESS, payload: false });
};

export const OpenModal = () => {
	return (successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) =>
		dispatch({ type: types.OPEN_MODAL.SUCCESS, payload: true });
};
