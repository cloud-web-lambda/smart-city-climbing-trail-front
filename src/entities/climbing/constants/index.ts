import type { Difficulty, RequestGetMonthlyClimbingTrackParams } from "@/entities/climbing/api";

import { dayjs } from "@/shared/lib";

export const DIFFICULTY = ["easy", "middle", "hard"] as const;

export const DIFFICULTY_MAPPER: Record<Difficulty, string> = {
	easy: "쉬움",
	middle: "중간",
	hard: "어려움",
};

export const INITIAL_MONTHLY_TRACK: RequestGetMonthlyClimbingTrackParams = {
	year: dayjs().year(),
	month: dayjs().month() + 1,
} as const;
