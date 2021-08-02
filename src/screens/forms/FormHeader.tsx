import { Cancel } from "assets";
import { CloseModal } from "redux/actions";
import { useDispatch } from "react-redux";

export const FormHeader = () => {
	const dispatch = useDispatch();
	const closeModal = CloseModal();

	return (
		<div className="form-header text-center">
			<div className="flex justify-center items-center w-full">
				<h4 className="title">eTranzact eCommerce</h4>
				<div
					className="cancel-cont flex justify-end"
					onClick={() => dispatch(closeModal())}
				>
					<img
						src={Cancel}
						alt="cancel"
						className="icon cursor-pointer w-6 h-6"
					/>
				</div>
			</div>
			<p>Create an account to list your own products</p>
			<hr className="hr" />
		</div>
	);
};
