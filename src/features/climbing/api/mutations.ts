import { useQueryClient } from "@tanstack/react-query";

import { queries } from "@/features/common";

import {
	getClimbingTrailApi,
	getDifferentClimbingTrailApi,
	saveClimbingTrackApi,
} from "@/entities/climbing/api/service";

import { useToastMutation } from "@/shared/hooks";

/** 등산객 위치로부터 가장 가까운 등산로 정보 조회 */
export const useGetClimbingTrailMutation = () =>
	useToastMutation({
		hasErrorToast: true,
		hasSuccessToast: false,
		mutationFn: getClimbingTrailApi,
	});

/** 같은 산의 다른 등산로 추천 */
export const useGetDifferentClimbingTrailMutation = () =>
	useToastMutation({
		hasErrorToast: true,
		hasSuccessToast: false,
		mutationFn: getDifferentClimbingTrailApi,
	});

/** 등산객의 등산기록을 저장 */
export const useSaveClimbingTrackMutation = () => {
	const queryClient = useQueryClient();

	return useToastMutation({
		hasErrorToast: true,
		hasSuccessToast: false,
		mutationFn: saveClimbingTrackApi,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: queries.climbing._def });
		},
	});
};
