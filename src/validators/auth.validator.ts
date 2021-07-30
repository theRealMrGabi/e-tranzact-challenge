import * as Yup from "yup";

export const signUpSchema = () => {
	return Yup.object().shape({
		email: Yup.string()
			.email("Please input a valid email address")
			.required("A valid email is required"),
		password: Yup.string()
			.min(8, "minimum of 8 character is required")
			.required("Password is required"),
		firstName: Yup.string().trim().required("Firstname is requied"),
		lastName: Yup.string().trim().required("Lastname is requied"),
	});
};

export const loginSchema = () => {
	return Yup.object().shape({
		email: Yup.string()
			.email("Please input a valid email address")
			.required("A valid email is required"),
		password: Yup.string()
			.min(8, "minimum of 8 character is required")
			.required("Password is required"),
	});
};

export const updatePasswordSchema = () => {
	return Yup.object().shape({
		currentPassword: Yup.string().required("Enter your current password"),
		newPassword: Yup.string().oneOf(
			[Yup.ref("currentPassword"), undefined],
			"Passwords must match"
		),
	});
};
