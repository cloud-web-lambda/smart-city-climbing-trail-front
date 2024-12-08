import { DIFFICULTY } from "@/entities/climbing/constants";

import type { Coordinates } from "@/shared/model";

export type Difficulty = (typeof DIFFICULTY)[number];

export interface RequestGetClimbingTrailParams extends Coordinates {
	difficulty: Difficulty;
}

export interface RequestGetDifferentClimbingTrailParams extends RequestGetClimbingTrailParams {
	excludedMountains: string[] | string;
}

export interface TrailDTO {
	/** 등산로의 이름 */
	trailName: string;
	/** 등산로의 거리 ( 미터 단위 ) */
	distance: string;
	/** 등산로의 난이도 */
	difficulty: Difficulty;
	coordinates: Coordinates;
}
