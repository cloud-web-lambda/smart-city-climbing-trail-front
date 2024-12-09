import { Link, useSearch } from "@tanstack/react-router";

import { IconArrowLeftLarge } from "@/shared/ui/assets/icons/arrow";

import styles from "./monthlyTrackPage.module.scss";

const MonthlyTrackPage: React.FC = () => {
	const { month, year } = useSearch({ from: "/_common/track/monthly" });

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>
				<Link to="/track" replace className={styles.back}>
					<IconArrowLeftLarge />
				</Link>
				{year}년 {month}월 등산기록
			</h1>
		</main>
	);
};

export default MonthlyTrackPage;
