import { DIFFICULTY } from "@/entities/climbing/constants";

import type { Coordinates } from "@/shared/model";

import type { Dayjs } from "dayjs";

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

export interface RequestSaveClimbingTrackBody {
	trailName: string;
	startDate: Dayjs | Date;
	endDate: Dayjs | Date;
	distance: number;
}

export interface SaveClimbingTrackDTO extends RequestSaveClimbingTrackBody {
	sub: string;
	calories: number;
}

export interface TrackDTO {
	totalHikingTime: number;
	totalDistance: number;
	totalCalories: number;
	averageHikingTime: number;
	averageDistance: number;
	averageCalories: number;
	trails: string[];
}

export interface RequestGetMonthlyClimbingTrackParams {
	year: number;
	month: number;
}
