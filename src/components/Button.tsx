import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
	text,
	className,
	disabled,
	loading,
	...rest
}) => {
	return (
		<button
			{...rest}
			disabled={disabled || loading}
			className={`buttonContainer ${className}`}
		>
			{text}
		</button>
	);
};
