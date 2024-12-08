import { type PropsWithChildren, useLayoutEffect } from "react";

import { useNavigate } from "@tanstack/react-router";

import { useMe } from "@/features/users/hooks";

const BeforeAuthorizedLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const { me, checkIsLogined } = useMe();
	const navigate = useNavigate();

	useLayoutEffect(() => {
		if (checkIsLogined(me)) navigate({ to: "/home", replace: true });
	}, [checkIsLogined, me, navigate]);

	return <>{children}</>;
};

export default BeforeAuthorizedLayout;
