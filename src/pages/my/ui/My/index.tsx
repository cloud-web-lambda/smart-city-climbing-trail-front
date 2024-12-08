import { useSearch } from "@tanstack/react-router";

import { EditWeightInfoSection, WeightInfoSection } from "@/widgets/weight/ui";

import { useMe } from "@/features/users/hooks";

import styles from "./myPage.module.scss";

const MyPage: React.FC = () => {
	const { me, checkIsLogined, onLogout } = useMe();
	const { isEditWeight } = useSearch({ from: "/_common/my" });

	if (!checkIsLogined(me)) return null;

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>프로필</h1>
			<h2 className={styles.emailTitle}>이메일</h2>
			<address className={styles.email}>{me.email}</address>
			{!isEditWeight && <WeightInfoSection />}
			{isEditWeight && <EditWeightInfoSection />}
			<button type="button" onClick={onLogout} className={styles.logoutButton}>
				로그아웃
			</button>
		</main>
	);
};

export default MyPage;
