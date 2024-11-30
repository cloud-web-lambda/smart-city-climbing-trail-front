import type { ReactNode } from "react";

import cx from "clsx";

import styles from "./label.module.scss";

interface Props {
	required?: boolean;
	className?: string;
	children?: ReactNode;
}

const Label: React.FC<Props> = ({ children, className, required }) => {
	return <span className={cx(styles.wrapper, className, { [styles.required]: required })}>{children}</span>;
};

export default Label;
