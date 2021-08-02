import { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { showToast } from "utils";
import { useHistory } from "react-router-dom";
import { BrandLogo, HumanIcon } from "assets";

export const AuthLayout: FC<LayoutProps & RouteComponentProps> = ({
	children,
}) => {
	const history = useHistory();
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (!token) {
			showToast("Login required to view this page", "error");
			return history.push("/");
		}
	}, [token, history]);

	return (
		<>
			<AuthNavbar />
			{children}
		</>
	);
};

const AuthNavbar: FC = () => {
	return (
		<div className="auth-navbar">
			<div className="w-full py-4 flex items-center justify-between h-14">
				<div className="h-8 cursor-pointer w-52">
					<img src={BrandLogo} alt="etranzact-brand" />
				</div>
				<div className="other-section flex justify-between w-2/4">
					<div className="flex">
						<div className="mr-12 cursor-pointer">PRODUCT</div>
						<div className="cursor-pointer">CATEGORY</div>
					</div>
					<div className="w-6 h-6">
						<img src={HumanIcon} alt="logged-in" />
					</div>
				</div>
			</div>

			<hr className="hr" />
		</div>
	);
};
