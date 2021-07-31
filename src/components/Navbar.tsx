import { BrandLogo } from "assets";
import { Button } from "./";

export const Navbar = () => {
	return (
		<div>
			<div className="w-full py-4 flex items-center justify-between h-14">
				<div className="h-8 w-52 cursor-pointer">
					<img src={BrandLogo} alt="etranzact-brand" />
				</div>
				<div>
					<Button text="LOGIN" className="h-8 m-0 mr-8" />
					<Button text="REGISTER" className="h-8 m-0" />
				</div>
			</div>
			<hr className="hr" />
		</div>
	);
};
