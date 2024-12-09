import { type PropsWithChildren, useLayoutEffect } from "react";

import { useNavigate } from "@tanstack/react-router";

import { useMe } from "@/features/users/hooks";

const AfterAuthorizedLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const { me, checkIsLogined } = useMe();
	const navigate = useNavigate();

	useLayoutEffect(() => {
		if (!checkIsLogined(me)) navigate({ to: "/auth", replace: true });
	}, [checkIsLogined, me, navigate]);

	if (!checkIsLogined(me)) return null;

	return <>{children}</>;
};

export default AfterAuthorizedLayout;
