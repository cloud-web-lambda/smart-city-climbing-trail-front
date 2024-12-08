import type {
	RequestGetClimbingTrailParams,
	RequestGetDifferentClimbingTrailParams,
	TrailDTO,
} from "@/entities/climbing/api/climbing";
import { authApiClient } from "@/entities/common/api";

import { getSearchParams } from "@/shared/lib";

/** 등산객 위치로부터 가장 가까운 등산로 정보 조회 */
export const getClimbingTrailApi = (params: RequestGetClimbingTrailParams) =>
	authApiClient.get<TrailDTO>("climbing/trail", { searchParams: getSearchParams(params) }).json();

/** 같은 산의 다른 등산로 추천 */
export const getDifferentClimbingTrailApi = (params: RequestGetDifferentClimbingTrailParams) =>
	authApiClient.get<TrailDTO>("climbing/trail/different", { searchParams: getSearchParams(params) }).json();
