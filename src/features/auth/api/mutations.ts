import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { confirmCodeApi, signInApi, signUpApi } from "@/entities/auth/api";

import { getKyHTTPError, isKyHTTPError } from "@/shared/api";
import { useToast } from "@/shared/hooks";

/** 로그인 */
export const useSignInMutation = () => {
	const { addToast } = useToast();

	return useMutation({
		mutationFn: signInApi,
		onSuccess: (data) => {
			addToast({ message: data.message, state: "positive" });
		},
		onError: async (err) => {
			if (isKyHTTPError(err)) {
				const response = await getKyHTTPError<{ message: string }>(err);
				addToast({ message: response?.message || "로그인에 실패했습니다.", state: "negative" });
			}
		},
	});
};

/** 회원가입 */
export const useSignUpMutation = () => {
	const { addToast } = useToast();

	return useMutation({
		mutationFn: signUpApi,
		onSuccess: (data) => {
			addToast({ message: data.message, state: "positive" });
		},
		onError: async (err) => {
			if (isKyHTTPError(err)) {
				const response = await getKyHTTPError<{ message: string }>(err);
				addToast({ message: response?.message || "회원가입에 실패했습니다", state: "negative" });
			}
		},
	});
};

/** 회원가입 인증 코드 */
export const useConfirmCodeMutation = () => {
	const { addToast } = useToast();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: confirmCodeApi,
		onSuccess: (data) => {
			addToast({ message: data.message, state: "positive" });
			navigate({ to: "/auth", replace: true });
		},
		onError: async (err) => {
			if (isKyHTTPError(err)) {
				const response = await getKyHTTPError<{ message: string }>(err);
				addToast({ message: response?.message || "코드 인증에 실패했습니다.", state: "negative" });
			}
		},
	});
};
