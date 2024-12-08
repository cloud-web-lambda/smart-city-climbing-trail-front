import { z } from "zod";

export const updateWeightSchema = z.object({
	weight: z
		.string({ message: "몸무게를 입력해주세요" })
		.refine((value) => !isNaN(parseInt(value, 10)), { message: "몸무게는 숫자여야 합니다" }),
});

export type UpdateWeightSchema = z.infer<typeof updateWeightSchema>;
