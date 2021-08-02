import { FC, useState } from "react";
import { BrandLogo } from "assets";
import { Button, Modal } from "./";
import { RegisterForm, SignInForm } from "screens/forms";
import { useSelector, useDispatch } from "react-redux";
import { OpenModal } from "redux/actions";

export const Navbar: FC = () => {
	const dispatch = useDispatch();
	const openModal = OpenModal();

	const { modalVisibility } = useSelector((state: any) => state.utils);

	/**Modal Content or forms will be rendered based on the string parameter passed here */
	const [modalForm, setModalForm] = useState<string>("");

	const handleModal = (modalType: string) => {
		setModalForm(modalType);
		dispatch(openModal());
	};

	return (
		<div>
			<div className="w-full py-4 flex items-center justify-between h-14">
				<div className="h-8 w-52 cursor-pointer">
					<img src={BrandLogo} alt="etranzact-brand" />
				</div>
				<div>
					<Button
						text="LOGIN"
						className="h-8 m-0 mr-8"
						onClick={() => handleModal("SignInForm")}
					/>
					<Button
						text="REGISTER"
						className="h-8 m-0"
						onClick={() => handleModal("RegisterForm")}
					/>
				</div>
			</div>

			<Modal
				onClose={() => !modalVisibility}
				visible={modalVisibility}
				cancelPropagation={true}
			>
				{modalForm === "RegisterForm" && <RegisterForm />}
				{modalForm === "SignInForm" && <SignInForm />}
			</Modal>
			<hr className="hr" />
		</div>
	);
};
