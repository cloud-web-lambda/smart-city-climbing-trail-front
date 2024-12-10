import type {
	RequestGetClimbingTrailParams,
	RequestGetDifferentClimbingTrailParams,
	RequestGetMonthlyClimbingTrackParams,
	RequestSaveClimbingTrackBody,
	SaveClimbingTrackDTO,
	TrackDTO,
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

/** 등산객의 등산기록을 저장 */
export const saveClimbingTrackApi = (json: RequestSaveClimbingTrackBody) =>
	authApiClient.post<SaveClimbingTrackDTO>("climbing/track/new", { json }).json();

/** 등산객의 전체 등산기록 조회 */
export const getClimbingTrackApi = () => authApiClient.get<TrackDTO>("climbing/track").json();

/** 등산객의 월별 등산기록 조회 */
export const getMonthlyClimbingTrackApi = (params: RequestGetMonthlyClimbingTrackParams) =>
	authApiClient.get<TrackDTO>("climbing/monthly-track", { searchParams: getSearchParams(params) }).json();
