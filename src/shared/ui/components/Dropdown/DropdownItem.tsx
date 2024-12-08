import type { ComponentProps } from "react";

import cx from "clsx";
import Skeleton from "react-loading-skeleton";

import Interaction from "../Interaction";

import styles from "./dropdownItem.module.scss";

interface Props extends ComponentProps<"button"> {
	wrapperClassName?: string;
}

const DropdownItem: React.FC<Props> = ({ children, className, wrapperClassName, disabled, ...props }) => {
	return (
		<li className={cx(styles.wrapper, wrapperClassName)}>
			<button type="button" className={cx(styles.button, className)} disabled={disabled} {...props}>
				{children}
				<Interaction variant="light" backgroundColor="--c-label-normal" disabled={disabled} />
			</button>
		</li>
	);
};

export default DropdownItem;

interface LoadingDropdownItemProps {
	wrapperClassName?: string;
	className?: string;
	height: string | number;
}

export const LoadingDropdownItem: React.FC<LoadingDropdownItemProps> = ({ className, wrapperClassName, height }) => {
	return <Skeleton className={className} containerClassName={wrapperClassName} width="100%" height={height} />;
};
