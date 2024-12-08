import type {
	ConfirmCodeDTO,
	RequestConfirmCodeDTO,
	RequestSignInDTO,
	RequestSignUpDTO,
	SignInDTO,
	SignOutDTO,
	SignUpDTO,
} from "@/entities/auth/api/auth";
import { authApiClient } from "@/entities/common/api";

import { apiClient } from "@/shared/api";

/** 로그인 */
export const signInApi = (json: RequestSignInDTO) => apiClient.post<SignInDTO>("sign-in", { json }).json();

/** 회원가입 */
export const signUpApi = (json: RequestSignUpDTO) => apiClient.post<SignUpDTO>("sign-up", { json }).json();

/** 회원가입 인증 코드 */
export const confirmCodeApi = (json: RequestConfirmCodeDTO) =>
	apiClient.post<ConfirmCodeDTO>("confirm", { json }).json();

/** 로그아웃 */
export const signOutApi = () => authApiClient.post<SignOutDTO>("sign-out").json();
