import { z } from "zod";

import {
	REGEX_AT_LEAST_ONE_CHARACTER,
	REGEX_AT_LEAST_ONE_LOWER_CASE_ENGLISH,
	REGEX_AT_LEAST_ONE_NUMBER,
	REGEX_AT_LEAST_ONE_UPPER_CASE_ENGLISH,
} from "@/shared/constants";

export const signUpSchema = z.object({
	email: z
		.string({ message: "이메일을 입력해주세요." })
		.email({ message: "유효한 이메일 주소를 입력해주세요." })
		.refine((email) => email.toLowerCase().endsWith("@gmail.com"), {
			message: "이메일은 gmail 주소만 허용됩니다.",
		}),
	password: z
		.string({ message: "비밀번호를 입력해주세요." })
		.min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
		.regex(REGEX_AT_LEAST_ONE_LOWER_CASE_ENGLISH, { message: "소문자를 최소 1개 이상 포함해야 합니다." })
		.regex(REGEX_AT_LEAST_ONE_UPPER_CASE_ENGLISH, { message: "대문자를 최소 1개 이상 포함해야 합니다." })
		.regex(REGEX_AT_LEAST_ONE_NUMBER, { message: "숫자를 최소 1개 이상 포함해야 합니다." })
		.regex(REGEX_AT_LEAST_ONE_CHARACTER, { message: "특수문자를 최소 1개 이상 포함해야 합니다." }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
