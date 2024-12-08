import cx from "clsx";
import Skeleton from "react-loading-skeleton";

import { useGetMountainInfoSuspenseQuery } from "@/features/mountain/api/queries";

import styles from "./MountainInfoSection.module.scss";

interface Props {
	trailName: string;
	className?: string;
}

const MountainInfoSection: React.FC<Props> = ({ trailName, className }) => {
	const { data } = useGetMountainInfoSuspenseQuery({ trailName });
	const { airQuality, sunTimes, weather } = data;

	return (
		<section className={cx(styles.wrapper, className)}>
			<h2 className={styles.title}>현재 위치의 실시간 기상 경보</h2>
			{weather.rainWarning && <p className={cx(styles.warning, styles.rain)}>비가올 수 있어요 ㅜㅜ</p>}
			{weather.windWarning && <p className={cx(styles.warning, styles.wind)}>바람이 셀 수 있어요 ㅜㅜ</p>}
			<dl>
				<dt>온도</dt>
				<dd>{weather.temperature}</dd>
				<dt>바람 속도</dt>
				<dd>{weather.windSpeed}</dd>
			</dl>
			<h2 className={styles.title}>{trailName}의 대기질</h2>
			<dl>
				<dt>미세먼지</dt>
				<dd>
					[{airQuality.fineDustStatus}]{airQuality.fineDustIndex}
				</dd>
				<dt>초미세먼지</dt>
				<dd>
					[{airQuality.ultrafineDustStatus}]{airQuality.ultrafineDustIndex}
				</dd>
			</dl>
			<h2 className={styles.title}>{trailName}의 일출/일몰 시간</h2>
			<dl>
				<dt>일출 시간</dt>
				<dd>{sunTimes.sunrise}</dd>
				<dt>일몰 시간</dt>
				<dd>{sunTimes.sunset}</dd>
			</dl>
		</section>
	);
};

export default MountainInfoSection;

export const LoadingMountainInfoSection: React.FC<Props> = ({ className, trailName }) => {
	return (
		<section className={cx(styles.wrapper, className)}>
			<h2 className={styles.title}>현재 위치의 실시간 기상 경보</h2>
			<dl>
				<dt>온도</dt>
				<Skeleton width={32} />
				<dt>바람 속도</dt>
				<Skeleton width={32} />
			</dl>
			<h2 className={styles.title}>{trailName}의 대기질</h2>
			<dl>
				<dt>미세먼지</dt>
				<Skeleton width={120} />
				<dt>초미세먼지</dt>
				<Skeleton width={120} />
			</dl>
			<h2 className={styles.title}>{trailName}의 일출/일몰 시간</h2>
			<dl>
				<dt>일출 시간</dt>
				<Skeleton width={120} />
				<dt>일몰 시간</dt>
				<Skeleton width={120} />
			</dl>
		</section>
	);
};
