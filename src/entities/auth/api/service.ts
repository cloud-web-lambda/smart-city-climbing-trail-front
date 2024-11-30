import type { RequestSignUpDTO, SignUpDTO } from "@/entities/auth/api/auth";

import { apiClient } from "@/shared/api";

/** 회원가입 */
export const signUpApi = (json: RequestSignUpDTO) => apiClient.post<SignUpDTO>("sign-up", { json }).json();
