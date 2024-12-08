import { useGetClimbingTrackSuspenseQuery } from "@/features/climbing/api";

import styles from "./trackPage.module.scss";

const TrackPage: React.FC = () => {
	const { data } = useGetClimbingTrackSuspenseQuery();

	return <main className={styles.wrapper}>{JSON.stringify(data)}</main>;
};

export default TrackPage;
