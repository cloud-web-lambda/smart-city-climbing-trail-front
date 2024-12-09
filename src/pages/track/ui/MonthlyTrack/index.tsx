import { startTransition, Suspense } from "react";

import { Link, useNavigate, useSearch } from "@tanstack/react-router";

import { LoadingTotalTrackInfo } from "@/widgets/track/ui";

import { MonthPicker } from "@/features/climbing/ui";

import type { MonthlyClimbingTrackSchema } from "@/entities/climbing/model";

import { IconArrowLeftLarge } from "@/shared/ui/assets/icons/arrow";

import Track from "./Track";

import styles from "./monthlyTrackPage.module.scss";

const MonthlyTrackPage: React.FC = () => {
	const { month, year } = useSearch({ from: "/_common/track/monthly" });
	const navigate = useNavigate();

	const onClickMonth = (date: MonthlyClimbingTrackSchema) => {
		startTransition(() => {
			navigate({ to: "/track/monthly", search: date, replace: true });
		});
	};

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>
				<Link to="/track" replace className={styles.back}>
					<IconArrowLeftLarge />
				</Link>
				{year}년 {month}월 등산기록
			</h1>
			<div className={styles.pickerWrapper}>
				<MonthPicker month={month} year={year} onClick={onClickMonth} />
			</div>
			<Suspense fallback={<LoadingTotalTrackInfo />}>
				<Track />
			</Suspense>
		</main>
	);
};

export default MonthlyTrackPage;
