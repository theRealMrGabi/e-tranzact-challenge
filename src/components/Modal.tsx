import { useState, useEffect, FC } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: JSX.Element;
	visible: boolean;
	onClose: () => void;
	className: string;
	cancelPropagation: boolean;
}

export const Modal: FC<ModalProps> = ({
	children,
	visible,
	onClose,
	className,
	cancelPropagation = false,
	...rest
}) => {
	const [_visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		setVisible(visible);
	}, [visible]);

	return (
		<div
			{...rest}
			className={`
      modal
			${!_visible && `hidden`}
			${_visible && `styleDisplay`}
			${className}
			`}
			onClick={() => (cancelPropagation ? null : onClose && onClose())}
		>
			<div className={styles.container} onClick={(e) => e.stopPropagation()}>
				{visible && <div className="modalContent">{children}</div>}
			</div>
		</div>
	);
};
