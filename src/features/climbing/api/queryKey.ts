import { createQueryKeys } from "@lukemorales/query-key-factory";

import { RequestGetMonthlyClimbingTrackParams } from "@/entities/climbing/api";
import { getClimbingTrackApi, getMonthlyClimbingTrackApi } from "@/entities/climbing/api/service";

export const climbingQueryKeys = createQueryKeys("climbing", {
	getClimbingTrack: {
		queryKey: ["getClimbingTrack"],
		queryFn: getClimbingTrackApi,
	},
	getMonthlyClimbingTrack: (params: RequestGetMonthlyClimbingTrackParams) => ({
		queryKey: ["getMonthlyClimbingTrack", params],
		queryFn: () => getMonthlyClimbingTrackApi(params),
	}),
});
