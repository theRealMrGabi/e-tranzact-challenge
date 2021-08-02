import cogoToast from "cogo-toast";

export const generateActions = (action: string) => {
	action = action.toUpperCase();
	return {
		REQUEST: `${action}_REQUEST`,
		SUCCESS: `${action}_SUCCESS`,
		FAILURE: `${action}_FAILURE`,
	};
};

export const _isAnEmpytyObject = (obj: any) => {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) return false;
	}
	return true;
};

export const getToken = () => {
	const token = localStorage.getItem("token");
	return token;
};

export const showToast = (message: string, type?: string) => {
	if (type) type = type.toLowerCase();

	switch (type) {
		case "success":
			cogoToast.success(message, { position: "top-right" });
			break;
		case "info":
			cogoToast.info(message, { position: "top-right" });
			break;
		case "loading":
			cogoToast.loading(message, { position: "top-right" });
			break;
		case "warn":
			cogoToast.warn(message, { position: "top-right" });
			break;
		case "error":
			cogoToast.error(message, { position: "top-right" });
			break;

		default:
			cogoToast.info(message, { position: "top-right" });
			break;
	}
};

export const callbackToast = (message: any) => {
	const { hide } = cogoToast.loading(message, {
		hideAfter: 0,
		position: "top-right",
	});

	return hide;
};

export * from "./axios";
export * from "./storage";
