import type { PropsWithChildren } from "react";

import styles from "./commonLayout.module.scss";

const CommonLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default CommonLayout;
