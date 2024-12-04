import { type PropsWithChildren, useCallback, useEffect } from "react";

import { TOKEN_EXPIRED_EVENT_NAME } from "@/entities/users/constants";

import { useToast } from "@/shared/hooks";

const AuthHandler: React.FC<PropsWithChildren> = ({ children }) => {
	const { addToast } = useToast();

	const handleTokenExpiredEvent = useCallback(() => {
		addToast({ message: "세션이 만료되었습니다.", state: "negative" });
	}, [addToast]);

	useEffect(() => {
		window.addEventListener(TOKEN_EXPIRED_EVENT_NAME, handleTokenExpiredEvent);
		return () => {
			window.removeEventListener(TOKEN_EXPIRED_EVENT_NAME, handleTokenExpiredEvent);
		};
	}, [handleTokenExpiredEvent]);

	return <>{children}</>;
};

export default AuthHandler;
