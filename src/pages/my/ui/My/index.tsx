import { useMe } from "@/features/users/hooks";

import styles from "./myPage.module.scss";

const MyPage: React.FC = () => {
	const { me, checkIsLogined, onLogout } = useMe();

	if (!checkIsLogined(me)) return null;

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>프로필</h1>
			<h2 className={styles.emailTitle}>이메일</h2>
			<address className={styles.email}>{me.email}</address>
			<button type="button" onClick={onLogout} className={styles.logoutButton}>
				로그아웃
			</button>
		</main>
	);
};

export default MyPage;
