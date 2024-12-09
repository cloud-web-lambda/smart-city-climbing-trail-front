import { Suspense } from "react";

import { Link } from "@tanstack/react-router";

import { LoadingTotalTrackInfo } from "@/widgets/track/ui";

import { INITIAL_MONTHLY_TRACK } from "@/entities/climbing/constants";

import { Button } from "@/shared/ui/components";

import Track from "./Track";

import styles from "./trackPage.module.scss";

const TrackPage: React.FC = () => {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>총 등산기록</h1>
			<div className={styles.linkWrapper}>
				<Link to="/track/monthly" search={INITIAL_MONTHLY_TRACK}>
					<Button type="button" buttonType="outlined">
						월별 등산기록 조회
					</Button>
				</Link>
			</div>
			<Suspense fallback={<LoadingTotalTrackInfo />}>
				<Track />
			</Suspense>
		</main>
	);
};

export default TrackPage;
