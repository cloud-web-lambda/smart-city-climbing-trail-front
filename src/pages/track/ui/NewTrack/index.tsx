import { useCallback, useEffect } from "react";

import dayjs from "dayjs";

import { useSaveClimbingTrackMutation } from "@/features/climbing/api";
import { useTrackStore } from "@/features/climbing/model";
import { useGetNearbySubwayMutation } from "@/features/subways/api";

import { getGPSLocation } from "@/shared/lib";
import { IconArrowLeftLarge } from "@/shared/ui/assets/icons/arrow";
import { Button } from "@/shared/ui/components";

import styles from "./newTrackPage.module.scss";

const NewTrackPage: React.FC = () => {
	const { track, setTrack, clear } = useTrackStore();
	const { mutateAsync: saveClimbingTrack } = useSaveClimbingTrackMutation();
	const { data: nearbySubway, mutateAsync: getNearbySubway } = useGetNearbySubwayMutation();

	const onClickBack = () => {
		clear();
	};

	const onClickStart = () => {
		if (!track) return;
		setTrack({ ...track, startDate: dayjs() });
	};

	const onClickEnd = async () => {
		if (!track || !track.startDate) return;
		const endDate = dayjs();
		setTrack({ ...track, endDate });
		const { trailName, distance, startDate } = track;
		await saveClimbingTrack({ trailName, distance, startDate, endDate });
	};

	const handleNearbySubway = useCallback(async () => {
		if (!track?.endDate) return;
		const { lat, lng } = await getGPSLocation();
		await getNearbySubway({ lat, lng });
	}, [getNearbySubway, track?.endDate]);

	useEffect(() => {
		handleNearbySubway();
	}, [handleNearbySubway]);

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>
				<button type="button" className={styles.backButton} onClick={onClickBack}>
					<IconArrowLeftLarge />
				</button>
				등산 기록 측정
			</h1>
			<h2 className={styles.trailName}>{track?.trailName}</h2>
			<Button
				type="button"
				buttonType="primary"
				full
				onClick={onClickStart}
				disabled={!!track?.startDate}
				className={styles.button}
			>
				등산 기록 측정
			</Button>
			{track?.startDate && (
				<Button
					type="button"
					buttonType="primary"
					full
					onClick={onClickEnd}
					disabled={!!track?.endDate}
					className={styles.button}
				>
					기록 종료
				</Button>
			)}
			{JSON.stringify(nearbySubway)}
		</main>
	);
};

export default NewTrackPage;
