import { useState } from "react";

import cx from "clsx";
import Skeleton from "react-loading-skeleton";

import { useGetClimbingTrailMutation } from "@/features/climbing/api";
import { useRecommendTrailStore, useRequestRecommendTrailStore } from "@/features/climbing/model";

import { Difficulty } from "@/entities/climbing/api";
import { DIFFICULTY, DIFFICULTY_MAPPER } from "@/entities/climbing/constants";

import { getGPSLocation } from "@/shared/lib";
import { checkIsGPSLocationError } from "@/shared/lib/gps";
import { Button, Dropdown, useToast } from "@/shared/ui/components";

import styles from "./recommendTrailSection.module.scss";

interface Props {
	className?: string;
}

const RecommendTrailSection: React.FC<Props> = ({ className }) => {
	const { addToast } = useToast();
	const { params, isFetching, setIsFetching, setParams, clearResponseTrailNames, addResponseTrailNames } =
		useRequestRecommendTrailStore();
	const { trail, setTrail, clear } = useRecommendTrailStore();

	const [isShowDifficulty, setIsShowDifficulty] = useState(false);

	const { mutateAsync: getClimbingTrail } = useGetClimbingTrailMutation();

	const onClickDifficulty = (value: Difficulty) => {
		setParams({ ...params, difficulty: value });
		setIsShowDifficulty(false);
	};

	const onClickRecommend = async () => {
		clear();
		clearResponseTrailNames();
		setIsFetching(true);
		try {
			const { lat, lng } = await getGPSLocation();
			setParams({ lat, lng, difficulty: params.difficulty });
			const data = await getClimbingTrail({ lat, lng, difficulty: params.difficulty });
			addResponseTrailNames(data.trailName);
			setTrail(data);
		} catch (err) {
			if (checkIsGPSLocationError(err)) {
				addToast({ message: err.message, state: "negative" });
			}
		} finally {
			setIsFetching(false);
		}
	};

	return (
		<section className={cx(styles.wrapper, className)}>
			<div className={styles.menu}>
				<Dropdown
					disabled={isFetching}
					isShow={isShowDifficulty}
					onClose={() => setIsShowDifficulty(false)}
					onOpen={() => setIsShowDifficulty(true)}
					fitToChildrenWidth
					items={DIFFICULTY.map((value) => (
						<Dropdown.Item key={value} onClick={() => onClickDifficulty(value)}>
							{DIFFICULTY_MAPPER[value]}
						</Dropdown.Item>
					))}
				>
					{DIFFICULTY_MAPPER[params.difficulty]}
				</Dropdown>
				<Button disabled={isFetching} type="submit" buttonType="primary" full onClick={onClickRecommend}>
					등산로 추천 받기
				</Button>
			</div>
			{isFetching && <LoadingResult />}
			{trail && (
				<div className={styles.result}>
					<h2 className={styles.trailName}>{trail.trailName}</h2>
					<p className={styles.distance}>등산로 거리: {trail.distance}m</p>
				</div>
			)}
		</section>
	);
};

export default RecommendTrailSection;

const LoadingResult: React.FC = () => {
	return (
		<div className={styles.result}>
			<Skeleton width={100} height={24} />
			<Skeleton width={150} height={24} />
		</div>
	);
};
