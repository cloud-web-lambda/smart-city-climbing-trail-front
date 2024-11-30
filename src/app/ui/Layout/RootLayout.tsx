import type { PropsWithChildren } from "react";

import { DvhMinHeightLayout } from "@/shared/ui/Layout";

import styles from "./rootLayout.module.scss";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<DvhMinHeightLayout className={styles.wrapper} minHeight="100dvh">
			{children}
		</DvhMinHeightLayout>
	);
};

export default RootLayout;
