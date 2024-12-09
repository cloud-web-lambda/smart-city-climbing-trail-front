import { useRef, useState } from "react";

import cx from "clsx";
import { range } from "lodash-es";
import { useClickAway } from "react-use";

import { MonthlyClimbingTrackSchema } from "@/entities/climbing/model";

import { IconCalendarDays } from "@/shared/ui/assets/icons/calendar";
import { IconChevronDownGray, IconChevronRight } from "@/shared/ui/assets/icons/chevron";
import Interaction from "@/shared/ui/components/Interaction";

import styles from "./monthPicker.module.scss";

interface Props extends MonthlyClimbingTrackSchema {
	onClick: (date: MonthlyClimbingTrackSchema) => void;
}

const MonthPicker: React.FC<Props> = ({ month, year, onClick: onClickProps }) => {
	const [localDate, setLocalDate] = useState<MonthlyClimbingTrackSchema>({ month, year });
	const monthPickerRef = useRef<HTMLDivElement>(null);

	const [isShow, setIsShow] = useState(false);

	const onClick = (date: MonthlyClimbingTrackSchema) => {
		onClickProps(date);
		setIsShow(false);
	};

	useClickAway(monthPickerRef, () => setIsShow(false));

	return (
		<div tabIndex={-1} ref={monthPickerRef} className={styles.wrapper}>
			<button
				type="button"
				className={cx(styles.monthInput, { [styles.isShow]: isShow })}
				onClick={() => setIsShow((prev) => !prev)}
			>
				<IconCalendarDays />
				{year}년 {month}월
				<IconChevronDownGray className={styles.chevron} />
			</button>
			{isShow && (
				<aside className={styles.monthPicker}>
					<div className={styles.monthPickerHeader}>
						<button type="button" onClick={() => setLocalDate((prev) => ({ ...prev, year: prev.year - 1 }))}>
							<IconChevronRight className={styles.left} />
						</button>
						{localDate.year}년
						<button type="button" onClick={() => setLocalDate((prev) => ({ ...prev, year: prev.year + 1 }))}>
							<IconChevronRight />
						</button>
					</div>
					<ol className={styles.monthList}>
						{range(1, 13).map((value) => (
							<li
								key={`${year}-${value}`}
								className={cx(styles.itemWrapper, { [styles.active]: localDate.year === year && month === value })}
							>
								<button
									type="button"
									className={styles.item}
									onClick={() => onClick({ year: localDate.year, month: value })}
								>
									{value}월
									<Interaction backgroundColor="--c-g-cool-neutral-20" variant="normal" />
								</button>
							</li>
						))}
					</ol>
				</aside>
			)}
		</div>
	);
};

export default MonthPicker;
