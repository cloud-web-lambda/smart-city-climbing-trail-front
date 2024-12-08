import { Link } from "@tanstack/react-router";
import Skeleton from "react-loading-skeleton";

import { useGetMyWeightSuspenseQuery } from "@/features/users/api/queries";

import { Button } from "@/shared/ui/components";

import styles from "./weightInfoSection.module.scss";

const WeightInfoSection: React.FC = () => {
	const { data } = useGetMyWeightSuspenseQuery();

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>몸무게</h2>
			<p className={styles.weight}>{data.weight ? `${data.weight}kg` : "설정되지 않았습니다."}</p>
			<Link className={styles.editButton} to="/my" search={{ isEditWeight: true }} replace>
				<Button type="button" buttonType="tertiary">
					수정
				</Button>
			</Link>
		</section>
	);
};

export default WeightInfoSection;

export const LoadingWeightInfoSection: React.FC = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>몸무게</h2>
			<Skeleton width={32} height={24} />
		</section>
	);
};
