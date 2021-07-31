/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosInstance,
} from "axios";
import { getToken, callbackToast, showToast } from "utils";
import { local, session } from "./storage";

let that: any;

class ApiService {
	private service: AxiosInstance;
	hide: any;
	constructor() {
		const baseURL = `https://etranzact-test-api.herokuapp.com/api/etz/`;

		const service = axios.create({
			baseURL,
			withCredentials: false,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Origin": baseURL,
			},
		});

		service.interceptors.response.use(this.handleSuccess, this.handleError);
		service.interceptors.request.use((config: AxiosRequestConfig) => {
			const token = getToken();

			if (!token) return config;

			config.headers["Authorization"] = "Bearer " + token;
			return config;
		});

		this.service = service;
		that = this;
	}

	handleSuccess(response: AxiosResponse) {
		if (that.hide) that.hide && that.hide();
		if (response.data.message) showToast(response.data.message, "info");
		return response;
	}

	handleError = (error: AxiosError) => {
		if (error.response === undefined)
			showToast("No internet connection", "error");
		else {
			let message = "";
			const status = error?.response?.status;

			message = error?.response?.data?.responseText;

			if (Array.isArray(message)) {
				// eslint-disable-next-line
				message.map((msg: any) => showToast(msg.message, "error"));
			} else showToast(message, "error");

			if (status && status === 401) {
				local.clear();
				session.clear();
				window.location.href = "/login";
			}
		}

		if (that.hide) that.hide && that.hide();
		return Promise.reject(error?.response?.data);
	};

	request(
		method:
			| "GET"
			| "get"
			| "delete"
			| "DELETE"
			| "head"
			| "HEAD"
			| "options"
			| "OPTIONS"
			| "post"
			| "POST"
			| "put"
			| "PUT"
			| "patch"
			| "PATCH"
			| "link"
			| "LINK"
			| "unlink"
			| "UNLINK"
			| undefined,
		path: string,
		callback: any,
		errorCallback: any,
		payload?: AxiosRequestConfig,
		loadingMessage?: string
	) {
		if (loadingMessage) this.hide = callbackToast(loadingMessage);
		if (method === "GET" || method === "get") {
			return this.service
				.request({
					method,
					url: path,
					responseType: "json",
				})
				.then(
					(response: { data: AxiosResponse }) => callback(response.data),
					errorCallback
				);
		} else {
			return this.service
				.request({
					method,
					url: path,
					responseType: "json",
					data: payload,
				})
				.then(
					(response: { data: AxiosResponse }) => callback(response.data),
					errorCallback
				);
		}
	}
}

export default new ApiService();
