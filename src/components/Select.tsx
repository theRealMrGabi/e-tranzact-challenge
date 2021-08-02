import RSelect from "react-select";

export const Select = ({ options, name, placeholder, ...rest }: any) => {
	/**Override package default styling */
	const customStyles = {
		control: (provided: any, state: any) => ({
			...provided,
			cursor: "pointer",
		}),
		placeholder: (provided: any, state: any) => ({
			...provided,
			color: "black",
			fontWeight: "400",
			fontSize: "16px",
			border: "none",
		}),
		indicatorSeparator: (provided: any, state: any) => ({
			...provided,
			display: "none",
			fontSize: "20px",
		}),
		dropdownIndicator: (provided: any, state: any) => ({
			...provided,
			color: "black",
		}),
	};

	return (
		<div className="selectCont">
			<RSelect
				{...rest}
				name={name}
				placeholder={placeholder}
				styles={customStyles}
				options={options}
				className={`selectOptions ${rest.className}`}
			/>
		</div>
	);
};
