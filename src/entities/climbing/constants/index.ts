import { Difficulty } from "@/entities/climbing/api";

export const DIFFICULTY = ["easy", "middle", "hard"] as const;

export const DIFFICULTY_MAPPER: Record<Difficulty, string> = {
	easy: "쉬움",
	middle: "중간",
	hard: "어려움",
};
