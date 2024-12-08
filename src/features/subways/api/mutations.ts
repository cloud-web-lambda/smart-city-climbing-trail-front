import { getNearbySubwayApi } from "@/entities/subways/api";

import { useToastMutation } from "@/shared/hooks";

/** 등산객 위치로부터 가까운 지하철 역 정보 조회 */
export const useGetNearbySubwayMutation = () =>
	useToastMutation({
		hasErrorToast: true,
		hasSuccessToast: false,
		mutationFn: getNearbySubwayApi,
	});
