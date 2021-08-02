import { Radio, RadioGroup } from "@uiw/react-radio";
import { Input, Button } from "components";
import { FormHeader } from "./FormHeader";
import { useState } from "react";
import { useFormik } from "formik";
import { SignUpSchema } from "validators";
import { SignUp } from "redux/actions";
import { useSelector, useDispatch } from "react-redux";

export const RegisterForm = () => {
	const signUp = SignUp();
	const dispatch = useDispatch();

	const { loading } = useSelector((state: any) => state.auth);

	const [gender, setGender] = useState("");

	const handleSubmit = () => {
		dispatch(signUp(formik.values));
	};

	const initialValues = {
		name: "",
		username: "",
		email: "",
		password: "",
		gender: "",
		contactInfo: [
			{
				address: "",
				phoneNumber: "",
			},
		],
	};

	const formik = useFormik({
		initialValues,
		validationSchema: SignUpSchema,
		onSubmit: handleSubmit,
		validateOnChange: false,
	});

	const { setFieldValue } = formik;

	return (
		<div className="form-container">
			<FormHeader />

			<form onSubmit={formik.handleSubmit}>
				<div className="mt-4">
					<Input
						name="name"
						labelRequired={true}
						label="Full Name"
						onChange={formik.handleChange}
					/>
				</div>

				<Input
					name="email"
					labelRequired={true}
					label="Email Address"
					onChange={formik.handleChange}
				/>

				<div className="flex justify-between w-full">
					<div className="w-2/4">
						<Input
							name="username"
							labelRequired={true}
							label="Username"
							onChange={formik.handleChange}
						/>
					</div>

					<div className="w-2/4 pl-8">
						<div className="gender labelStyle">
							Gender <span className="requiredLabel">*</span>
						</div>

						<RadioGroup
							value={gender}
							name="gender"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setGender(e.target.value);
								setFieldValue("gender", e.target.value);
							}}
							className="mt-4"
						>
							<Radio value="male" className="mr-6">
								Male
							</Radio>
							<Radio value="female">Female</Radio>
						</RadioGroup>
					</div>
				</div>

				<Input
					name="password"
					labelRequired={true}
					label="Password"
					onChange={formik.handleChange}
					type="password"
				/>

				<div className="labelStyle">Contact Info</div>
				<div className="contact">
					<div className="inner-cont flex justify-between p-4 m-2">
						<div className="cancel-contact w-6 h-6 absolute top-0 right-0 text-center cursor-pointer font-medium">
							x
						</div>

						<div className="mr-4">
							<Input
								name="phoneNumber"
								label="Phone Number"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setFieldValue("contactInfo[0].phoneNumber]", e.target.value);
								}}
							/>
						</div>
						<div>
							<Input
								name="address"
								label="Address"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setFieldValue("contactInfo[0].address]", e.target.value);
								}}
							/>
						</div>
					</div>
				</div>

				<div className="w-full mt-8 mb-4 btn-wrap">
					<Button
						text="Create Account"
						className="action-btn"
						loading={loading}
						onClick={handleSubmit}
					/>
				</div>

				<div className="text-center text-sm sub-link">
					Already have an account? <span className="cursor-pointer">Login</span>{" "}
				</div>
			</form>
		</div>
	);
};
