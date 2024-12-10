import { useCallback, useEffect } from "react";

import { useSaveClimbingTrackMutation } from "@/features/climbing/api";
import { useTrackStore } from "@/features/climbing/model";
import { useGetNearbySubwayMutation } from "@/features/subways/api";

import { calculateTimeDifference, dayjs, formatTimeDifference, getGPSLocation } from "@/shared/lib";
import { checkIsGPSLocationError } from "@/shared/lib/gps";
import { IconArrowLeftLarge } from "@/shared/ui/assets/icons/arrow";
import { Button, useToast } from "@/shared/ui/components";

import styles from "./newTrackPage.module.scss";

const NewTrackPage: React.FC = () => {
	const { track, setTrack, clear } = useTrackStore();
	const { mutateAsync: saveClimbingTrack } = useSaveClimbingTrackMutation();
	const { data: nearbySubway, mutateAsync: getNearbySubway } = useGetNearbySubwayMutation();
	const { addToast } = useToast();

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
		const diff = calculateTimeDifference(startDate, endDate);

		addToast({ message: `${formatTimeDifference(diff)}동안의 등산이 완료되었습니다.`, state: "positive" });
	};

	const handleNearbySubway = useCallback(async () => {
		if (!track?.endDate) return;
		try {
			const { lat, lng } = await getGPSLocation();
			await getNearbySubway({ lat, lng });
		} catch (err) {
			if (checkIsGPSLocationError(err)) {
				addToast({ message: err.message, state: "negative" });
			}
		}
	}, [addToast, getNearbySubway, track?.endDate]);

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
			{nearbySubway && (
				<>
					<section className={styles.subwaySection}>
						<h2 className={styles.subwayTitle}>주변 지하철 역</h2>
						<p className={styles.station}>
							{nearbySubway.stationLine}호선 {nearbySubway.stationName}역
						</p>
					</section>
					<Button type="button" buttonType="primary" onClick={onClickBack} full className={styles.button}>
						등산로 추천으로 돌아가기
					</Button>
				</>
			)}
		</main>
	);
};

export default NewTrackPage;
