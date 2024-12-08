import { Link } from "@tanstack/react-router";

import { IconArchive, IconHome, IconProfile } from "@/shared/ui/assets/icons/layout";

import styles from "./bottomNavigation.module.scss";

const BottomNavigation: React.FC = () => {
	return (
		<footer className={styles.wrapper}>
			<nav>
				<Link className={styles.item}>
					<IconArchive />
					기록
				</Link>
				<Link to="/" className={styles.item} activeProps={{ className: styles.active }}>
					<IconHome />홈
				</Link>
				<Link to="/my" className={styles.item} activeProps={{ className: styles.active }}>
					<IconProfile />
					프로필
				</Link>
			</nav>
		</footer>
	);
};

export default BottomNavigation;
