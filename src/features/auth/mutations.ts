import { useMutation } from "@tanstack/react-query";

import { signUpApi } from "@/entities/auth/api";

/** 회원가입 */
export const useSignUpMutation = () =>
	useMutation({
		mutationFn: signUpApi,
	});
