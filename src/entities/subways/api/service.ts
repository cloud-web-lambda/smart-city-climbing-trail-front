import { authApiClient } from "@/entities/common/api";
import type { RequestGetNearbySubwayParams, SubwayDTO } from "@/entities/subways/api/subways";

import { getSearchParams } from "@/shared/lib";

/** 등산객 위치로부터 가까운 지하철 역 정보 조회 */
export const getNearbySubwayApi = (params: RequestGetNearbySubwayParams) =>
	authApiClient.get<SubwayDTO>("subways/nearby", { searchParams: getSearchParams(params) }).json();
