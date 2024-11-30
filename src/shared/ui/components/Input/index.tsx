import {
	type ComponentProps,
	forwardRef,
	type ForwardRefRenderFunction,
	type MouseEventHandler,
	type ReactNode,
} from "react";

import cx from "clsx";

import { EMPTY_TEXT } from "@/shared/constants";

import Label from "../Label";

import styles from "./input.module.scss";

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
	label?: ReactNode;
	errorMessage?: string;
	size: "medium" | "small";
	inputClassName?: string;
	inputWrapperClassName?: string;
	errorMessageClassName?: string;
	clearButtonClassName?: string;
	onClickClear?: MouseEventHandler<HTMLButtonElement>;
	hideClearButton?: boolean;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{
		label,
		className,
		disabled,
		property,
		errorMessage,
		size,
		inputClassName,
		name,
		required,
		placeholder = EMPTY_TEXT,
		errorMessageClassName,
		onClickClear,
		readOnly = false,
		value,
		inputWrapperClassName,
		clearButtonClassName,
		hideClearButton = false,
		...props
	},
	ref,
) => {
	return (
		<label
			className={cx(styles.wrapper, className, styles[size], { [styles.isError]: !!errorMessage })}
			aria-disabled={disabled}
		>
			{label && <Label required={required}>{label}</Label>}
			<div className={cx(styles.inputWrapper, inputWrapperClassName)}>
				<input
					ref={ref}
					className={cx(styles.input, inputClassName)}
					disabled={disabled}
					readOnly={readOnly}
					value={value}
					name={name}
					placeholder={placeholder}
					{...props}
				/>
				{!readOnly && !hideClearButton && !disabled && (
					<button
						type="button"
						name={name}
						aria-label="Clear Input"
						className={styles.clearButton}
						onClick={onClickClear}
					/>
				)}
			</div>
			{errorMessage && <small className={cx(styles.errorMessage, errorMessageClassName)}>{errorMessage}</small>}
		</label>
	);
};

export default forwardRef<HTMLInputElement, InputProps>(Input);
