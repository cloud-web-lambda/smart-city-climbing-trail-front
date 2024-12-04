import { useCallback } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useLoaderData, useRouter } from "@tanstack/react-router";

import { queries } from "@/features/common";

import type { LoginedMeDTO, MeDTO } from "@/entities/users/api";
import { removeEmail, removeTokens } from "@/entities/users/lib";

interface ReturnUseMe {
	me: MeDTO;
	checkIsLogined: (me: MeDTO) => me is LoginedMeDTO;
	refetchMe: () => Promise<void>;
	onLogout: () => Promise<void>;
}

const useMe = (): ReturnUseMe => {
	const queryClient = useQueryClient();
	const router = useRouter();
	const me = useLoaderData({ from: "__root__" });

	const checkIsLogined = useCallback((me: MeDTO): me is LoginedMeDTO => {
		return "isValid" in me && "username" in me && "email" in me;
	}, []);

	const refetchMe = useCallback(async () => {
		await queryClient.refetchQueries(queries.users.getMe);
		await router.invalidate();
	}, [queryClient, router]);

	const onLogout = useCallback(async () => {
		removeTokens();
		removeEmail();
		await refetchMe();
	}, [refetchMe]);

	return {
		me,
		checkIsLogined,
		onLogout,
		refetchMe,
	};
};

export default useMe;
