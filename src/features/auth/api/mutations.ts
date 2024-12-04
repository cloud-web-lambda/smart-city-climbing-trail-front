import { useNavigate } from "@tanstack/react-router";

import { useMe } from "@/features/users/hooks";

import { confirmCodeApi, signInApi, signUpApi } from "@/entities/auth/api";
import { setEmail, setTokens } from "@/entities/users/lib";

import { useToastMutation } from "@/shared/hooks";

/** 로그인 */
export const useSignInMutation = () => {
	const { refetchMe } = useMe();

	return useToastMutation({
		mutationFn: signInApi,
		hasErrorToast: true,
		hasSuccessToast: true,
		successKey: "message",
		onSuccess: async ({ accessToken, refreshToken }, { email }) => {
			setTokens({ accessToken, refreshToken });
			setEmail(email);
			await refetchMe();
		},
	});
};

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
