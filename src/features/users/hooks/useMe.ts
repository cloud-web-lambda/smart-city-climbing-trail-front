import { useCallback } from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useLoaderData, useRouter } from "@tanstack/react-router";

import { useSignOutMutation } from "@/features/auth/api";
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
	const { mutateAsync: signOut } = useSignOutMutation();

	const checkIsLogined = useCallback((me: MeDTO): me is LoginedMeDTO => {
		return "isValid" in me && "username" in me && "email" in me;
	}, []);

	const refetchMe = useCallback(async () => {
		queryClient.removeQueries({ queryKey: queries.users.getMe.queryKey });
		await router.invalidate();
	}, [queryClient, router]);

	const onLogout = useCallback(async () => {
		await signOut();
		removeTokens();
		removeEmail();
		await refetchMe();
	}, [refetchMe, signOut]);

	return {
		me,
		checkIsLogined,
		onLogout,
		refetchMe,
	};
};

export default useMe;
