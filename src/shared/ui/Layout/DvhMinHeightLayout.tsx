import { type CSSProperties, type ReactNode, useLayoutEffect, useMemo, useRef } from "react";

import cx from "clsx";
import { useWindowSize } from "react-use";

import { convertDvhToPx } from "@/shared/lib";

import styles from "./dvhMinHeightLayout.module.scss";

interface Props {
	children: ReactNode;
	className?: string;
	minHeight: string;
}

const DvhMinHeightLayout: React.FC<Props> = ({ children, className, minHeight }) => {
	if (!minHeight?.toString().endsWith("dvh")) console.assert("minHeight must be a string ending with 'dvh'");

	const { height } = useWindowSize();
	const ref = useRef<HTMLDivElement>(null);

	const style = useMemo(() => {
		return { "--min-height": minHeight } as CSSProperties;
	}, [minHeight]);

	useLayoutEffect(() => {
		if (!ref.current) return;

		if (!CSS.supports(`min-height: ${minHeight}`)) {
			ref.current.style.minHeight = convertDvhToPx(minHeight, height);
		}
	}, [height, minHeight]);

	return (
		<div className={cx(styles.wrapper, className)} style={style} ref={ref}>
			{children}
		</div>
	);
};

export default DvhMinHeightLayout;
