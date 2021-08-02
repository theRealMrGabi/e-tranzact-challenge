import * as Yup from "yup";

export const SignUpSchema = () => {
	return Yup.object().shape({
		email: Yup.string()
			.email("Please input a valid email address")
			.required("A valid email is required"),
		password: Yup.string().required("Password is required"),
		name: Yup.string().trim().required("Name is requied"),
		username: Yup.string().trim().required("Username is requied"),
		gender: Yup.string().trim().required("Gender is requied"),
		contactInfo: Yup.array().of(
			Yup.object().shape({
				address: Yup.string().required("Address is required"),
				phoneNumber: Yup.string().required("PhoneNumber is required"),
			})
		),
	});
};

export const LoginSchema = () => {
	return Yup.object().shape({
		email: Yup.string()
			.email("Please input a valid email address")
			.required("A valid email is required"),
		password: Yup.string().required("Password is required"),
	});
};
