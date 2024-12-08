import { authApiClient } from "@/entities/common/api";
import type { MountainInfoResponse, RequestGetMountainInfoParams } from "@/entities/mountain/api/mountain";

import { getSearchParams } from "@/shared/lib";

/** 특정 등산로의 종합 정보 조회 */
export const getMountainInfoApi = (params: RequestGetMountainInfoParams) =>
	authApiClient.get<MountainInfoResponse>("mountain-info", { searchParams: getSearchParams(params) }).json();
