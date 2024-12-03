import { z } from "zod";

export const confirmCodeSchema = z.object({
	sub: z.string({ message: "잘못된 접근입니다." }),
	confirmationCode: z.string({ message: "인증 코드를 입력해주세요" }),
});

export type ConfirmCodeSchema = z.infer<typeof confirmCodeSchema>;
