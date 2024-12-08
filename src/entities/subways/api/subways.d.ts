import type { Coordinates } from "@/shared/model";

export interface RequestGetNearbySubwayParams extends Coordinates {}

export interface SubwayDTO extends Coordinates {
	stationName: string;
	stationLine: string;
}
