import { Input, Button } from "components";
import { FormHeader } from "./FormHeader";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { LoginSchema } from "validators";
import { Login } from "redux/actions";

export const SignInForm = () => {
	const dispatch = useDispatch();
	const login = Login();

	const { loading } = useSelector((state: any) => state.auth);

	const initialValues = {
		email: "",
		password: "",
	};

	const handleSubmit = () => {
		dispatch(login(formik.values));
	};

	const formik = useFormik({
		initialValues,
		validationSchema: LoginSchema,
		onSubmit: handleSubmit,
		validateOnChange: false,
	});

	return (
		<div className="form-container">
			<FormHeader />
			<form onSubmit={formik.handleSubmit}>
				<div className="mt-4">
					<Input
						name="email"
						label="Email Address"
						onChange={formik.handleChange}
					/>
				</div>

				<Input
					name="password"
					label="Password"
					onChange={formik.handleChange}
					type="password"
				/>

				<div className="w-full mt-8 mb-4 btn-wrap">
					<Button
						text="Login"
						className="action-btn"
						loading={loading}
						onClick={handleSubmit}
					/>
				</div>
				<div className="text-center text-sm sub-link">
					Don't have an account? <span className="cursor-pointer">Sign Up</span>{" "}
				</div>
			</form>
		</div>
	);
};
