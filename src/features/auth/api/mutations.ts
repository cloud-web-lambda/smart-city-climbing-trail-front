import { useNavigate } from "@tanstack/react-router";

import { confirmCodeApi, signInApi, signUpApi } from "@/entities/auth/api";

import { useToastMutation } from "@/shared/hooks";

/** 로그인 */
export const useSignInMutation = () =>
	useToastMutation({
		mutationFn: signInApi,
		hasErrorToast: true,
		hasSuccessToast: true,
		successKey: "message",
	});

/** 회원가입 */
export const useSignUpMutation = () =>
	useToastMutation({
		mutationFn: signUpApi,
		hasErrorToast: true,
		hasSuccessToast: true,
		successKey: "message",
	});

/** 회원가입 인증 코드 */
export const useConfirmCodeMutation = () => {
	const navigate = useNavigate();

	return useToastMutation({
		mutationFn: confirmCodeApi,
		hasErrorToast: true,
		hasSuccessToast: true,
		successKey: "message",
		onSuccess: () => {
			navigate({ to: "/auth", replace: true });
		},
	});
};
