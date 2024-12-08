import { Suspense } from "react";

import { LoadingMountainInfoSection, MountainInfoSection, RecommendTrailSection } from "@/widgets/recommendTrail/ui";

import { useRecommendTrailStore } from "@/features/climbing/model";
import { ConfirmTrailButton, DifferentClimbingButton } from "@/features/climbing/ui";

import styles from "./homePage.module.scss";

const HomePage: React.FC = () => {
	const { trail } = useRecommendTrailStore();

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>어느 산으로 갈까?</h1>
			<RecommendTrailSection className={styles.recommendTrailSection} />
			{trail && (
				<Suspense fallback={<LoadingMountainInfoSection trailName={trail.trailName} />}>
					<MountainInfoSection trailName={trail.trailName} />
					<div className={styles.buttonWrapper}>
						<DifferentClimbingButton className={styles.differentClimbingButton} />
						<ConfirmTrailButton />
					</div>
				</Suspense>
			)}
		</main>
	);
};

export default HomePage;
