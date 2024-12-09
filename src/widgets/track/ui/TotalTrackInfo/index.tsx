import Skeleton from "react-loading-skeleton";

import { getTrackWithCount } from "@/widgets/track/model";

import type { TrackDTO } from "@/entities/climbing/api";

import styles from "./totalTrackInfo.module.scss";

interface Props {
	track: TrackDTO;
}

const TotalTrackInfo: React.FC<Props> = ({ track }) => {
	const trackWithCount = getTrackWithCount(track);

	return (
		<section className={styles.wrapper}>
			<dl>
				<dt>지금까지 등산을 완료한 산들</dt>
				{!trackWithCount && <dd>아직 등산한 곳이 없어요!</dd>}
				{!!trackWithCount && (
					<dd>
						{Object.entries(trackWithCount)
							.map(([trailName, count]) => `${trailName} ${count}번`)
							.join(", ")}
					</dd>
				)}
				<dt>총 등산 시간</dt>
				<dd>{track.totalHikingTime}</dd>
				<dt>평균 등산 시간</dt>
				<dd>{track.averageHikingTime}</dd>
				<dt>총 등산 거리</dt>
				<dd>{track.totalDistance.toLocaleString("ko-KR")}m</dd>
				<dt>평균 등산 거리</dt>
				<dd>{track.averageDistance.toLocaleString("ko-KR")}m</dd>
				<dt>총 연소 칼로리</dt>
				<dd>{track.totalCalories}</dd>
				<dt>평균 연소 칼로리</dt>
				<dd>{track.averageCalories}</dd>
			</dl>
		</section>
	);
};

export default TotalTrackInfo;

export const LoadingTotalTrackInfo: React.FC = () => {
	return (
		<section className={styles.wrapper}>
			<dl>
				<dt>지금까지 등산을 완료한 산들</dt>
				<dd>
					<Skeleton width={150} height={24} />
				</dd>
				<dt>총 등산 시간</dt>
				<dd>
					<Skeleton width={150} height={24} />
				</dd>
				<dt>평균 등산 시간</dt>
				<dd>
					<Skeleton width={150} height={24} />
				</dd>
				<dt>총 등산 거리</dt>
				<dd>
					<Skeleton width={150} height={24} />
				</dd>
				<dt>평균 등산 거리</dt>
				<dd>
					<Skeleton width={150} height={24} />
				</dd>
				<dt>총 연소 칼로리</dt>
				<dd>
					<Skeleton width={150} height={24} />
				</dd>
				<dt>평균 연소 칼로리</dt>
				<dd>
					<Skeleton width={150} height={24} />
				</dd>
			</dl>
		</section>
	);
};
