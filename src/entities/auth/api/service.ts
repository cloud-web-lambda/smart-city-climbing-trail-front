import type {
	ConfirmCodeDTO,
	RequestConfirmCodeDTO,
	RequestSignInDTO,
	RequestSignUpDTO,
	SignInDTO,
	SignUpDTO,
} from "@/entities/auth/api/auth";

import { apiClient } from "@/shared/api";

/** 로그인 */
export const signInApi = (json: RequestSignInDTO) => apiClient.post<SignInDTO>("sign-in", { json }).json();

/** 회원가입 */
export const signUpApi = (json: RequestSignUpDTO) => apiClient.post<SignUpDTO>("sign-up", { json }).json();

/** 회원가입 인증 코드 */
export const confirmCodeApi = (json: RequestConfirmCodeDTO) =>
	apiClient.post<ConfirmCodeDTO>("confirm", { json }).json();
