import React, { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	labelRequired?: boolean;
}

export const Input: FC<InputProps> = ({
	name,
	label,
	labelRequired,
	className,
	...rest
}) => {
	return (
		<div className="inputContainer">
			<label htmlFor={name} className="label">
				{label} {labelRequired && <span className="requiredLabel">*</span>}
			</label>
			<input name={name} {...rest} className={`input ${className}`} />
		</div>
	);
};
