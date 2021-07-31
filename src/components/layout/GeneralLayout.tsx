import { FC } from "react";
import { Navbar } from "components";
import { RouteComponentProps } from "react-router";

export const GeneralLayout: FC<LayoutProps & RouteComponentProps> = ({
	children,
}) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};
