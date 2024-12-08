import { useMe } from "@/features/users/hooks";

import styles from "./myPage.module.scss";

const MyPage: React.FC = () => {
	const { onLogout } = useMe();

	return (
		<div className={styles.wrapper}>
			<button type="button" onClick={onLogout}>
				로그아웃
			</button>
		</div>
	);
};

export default MyPage;
