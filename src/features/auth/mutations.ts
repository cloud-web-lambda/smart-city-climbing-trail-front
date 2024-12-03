import { useMutation } from "@tanstack/react-query";

import { confirmCodeApi, signUpApi } from "@/entities/auth/api";

/** 회원가입 */
export const useSignUpMutation = () =>
	useMutation({
		mutationFn: signUpApi,
	});

/** 회원가입 인증 코드 */
export const useConfirmCodeMutation = () =>
	useMutation({
		mutationFn: confirmCodeApi,
	});
