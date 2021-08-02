import * as types from "./types";
import axios from "utils/axios";
import { showToast } from "utils";
import { Dispatch } from "redux";

export const SignUp = () => {
	return (data: any, successCallback?: any, errorCallback?: any) => (
		dispatch: Dispatch
	) => (
		// eslint-disable-next-line
		dispatch({ type: types.SIGNUP.REQUEST }),
		axios.request(
			"POST",
			`user/register`,
			(res: any) => {
				dispatch({ type: types.SIGNUP.SUCCESS, payload: res });
				showToast("Registration successful", "success");
				successCallback?.();
			},
			(err: any) => {
				dispatch({ type: types.SIGNUP.FAILURE });
				showToast(err?.message, "error");
				errorCallback?.();
			},
			data
		)
	);
};

export const Login = () => {
	return (data: any, successCallback?: any, errorCallback?: any) => (
		dispatch: Dispatch
	) => (
		// eslint-disable-next-line
		dispatch({ type: types.LOGIN.REQUEST }),
		axios.request(
			"POST",
			`user/login`,
			(res: any) => {
				localStorage.setItem("token", res?.token);
				dispatch({ type: types.LOGIN.SUCCESS, payload: res });
				showToast("Login successful", "success");
				successCallback?.();
			},
			(err: any) => {
				dispatch({ type: types.LOGIN.FAILURE });
				showToast(err?.error, "error");
				errorCallback?.();
			},
			data
		)
	);
};
