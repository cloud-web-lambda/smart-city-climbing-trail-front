import { ComponentProps } from "react";

import cx from "clsx";

import Interaction from "@/shared/ui/components/Interaction";

import styles from "./button.module.scss";

type ButtonType = "primary" | "secondary" | "tertiary" | "outlined" | "gray";

interface Props extends ComponentProps<"button"> {
	full?: boolean;
	buttonType: ButtonType;
}

const Button: React.FC<Props> = ({ buttonType, full, type, className, disabled, children, ...props }) => {
	console.assert(type, "button type을 명시해주세요.");

	return (
		<button
			className={cx(styles.wrapper, className, styles[buttonType], { [styles.full]: full })}
			type={type}
			disabled={disabled}
			{...props}
		>
			{children}
			<Interaction backgroundColor="--c-g-neutral-10" variant="normal" />
		</button>
	);
};

export default Button;
