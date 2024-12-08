/* eslint-disable jsx-a11y/click-events-have-key-events */
import { type CSSProperties, type ReactNode, useCallback, useMemo, useRef } from "react";

import cx from "clsx";
import { useClickAway } from "react-use";

import { useElementSize } from "@/shared/hooks";
import { IconChevronDownGray } from "@/shared/ui/assets/icons/chevron";

import DropdownItem from "./DropdownItem";

import styles from "./dropdown.module.scss";

export type DropdownPosition = "bottomLeft" | "bottom" | "bottomRight" | "topLeft" | "top" | "topRight";

export interface DropdownProps {
	children: ReactNode;
	position?: DropdownPosition;
	className?: string;
	isShow: boolean;
	wrapperClassName?: string;
	fitToChildrenWidth?: boolean;
	items: ReactNode[];
	maxHeight?: number;
	isPlaceholder?: boolean;
	placeholder?: ReactNode;
	disabled?: boolean;
	onOpen: () => void;
	onClose: () => void;
}

function Dropdown({
	children,
	position = "bottom",
	className,
	isShow: isShowProp,
	maxHeight,
	wrapperClassName,
	items,
	isPlaceholder,
	disabled = false,
	placeholder,
	onClose,
	onOpen,
	fitToChildrenWidth = false,
}: DropdownProps) {
	const dropdownRef = useRef<HTMLDivElement>(null);
	const childrenRef = useRef<HTMLDivElement>(null);
	const { width } = useElementSize(childrenRef);

	const isShow = isShowProp && items.length > 0;

	const style = useMemo<CSSProperties>(
		() => ({ "--width": `${width}px`, "--max-height": `${maxHeight || 400}px` }) as CSSProperties,
		[maxHeight, width],
	);

	const onClickButton = () => {
		if (disabled) return;
		if (isShow) onClose();
		else onOpen();
	};

	useClickAway(
		dropdownRef,
		useCallback(() => {
			if (!isShow) return;
			onClose();
		}, [isShow, onClose]),
	);

	return (
		<div className={cx(styles.wrapper, wrapperClassName)} ref={dropdownRef}>
			<div role="button" tabIndex={-1} onClick={onClickButton} ref={childrenRef} aria-disabled={disabled}>
				<div className={cx(styles.selectWrapper, { [styles.disabled]: disabled })}>
					<span className={cx(styles.text, { [styles.placeholder]: isPlaceholder })}>
						{isPlaceholder && placeholder}
						{!isPlaceholder && children}
					</span>
					<IconChevronDownGray
						className={cx(styles.icon, {
							[styles.isPlaceholder]: isPlaceholder,
							[styles.isShow]: isShow,
						})}
					/>
				</div>
			</div>
			<menu
				className={cx(styles.dropdown, className, styles[position], {
					[styles.isShow]: isShow,
					[styles.fitToChildrenWidth]: fitToChildrenWidth,
				})}
				style={style}
			>
				{items}
			</menu>
		</div>
	);
}

Dropdown.Item = DropdownItem;

export default Dropdown;
