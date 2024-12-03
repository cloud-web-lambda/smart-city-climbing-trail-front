import type { ConfirmCodeDTO, RequestConfirmCodeDTO, RequestSignUpDTO, SignUpDTO } from "@/entities/auth/api/auth";

import { apiClient } from "@/shared/api";

/** 회원가입 */
export const signUpApi = (json: RequestSignUpDTO) => apiClient.post<SignUpDTO>("sign-up", { json }).json();

/** 회원가입 인증 코드 */
export const confirmCodeApi = (json: RequestConfirmCodeDTO) =>
	apiClient.post<ConfirmCodeDTO>("confirm", { json }).json();
