import { z } from "zod";

import { INITIAL_MONTHLY_TRACK } from "@/entities/climbing/constants";

import { dayjs } from "@/shared/lib";

export const monthlyClimbingTrackSchema = z
	.object({
		year: z.number().catch(INITIAL_MONTHLY_TRACK.year),
		month: z.number().catch(INITIAL_MONTHLY_TRACK.month),
	})
	.refine(
		(data) => {
			const date = dayjs(`${data.year}-${data.month}-01`);
			return date.isValid() && date.month() + 1 === data.month;
		},
		{
			message: "Invalid date",
			path: ["year", "month"],
		},
	)
	.transform((data) => {
		if (dayjs(`${data.year}-${data.month}-01`).isValid()) {
			return data;
		}
		return INITIAL_MONTHLY_TRACK;
	});

export type MonthlyClimbingTrackSchema = z.infer<typeof monthlyClimbingTrackSchema>;
