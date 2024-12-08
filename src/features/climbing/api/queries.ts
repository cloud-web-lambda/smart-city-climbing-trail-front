import { useSuspenseQuery } from "@tanstack/react-query";

import { queries } from "@/features/common";

import type { RequestGetMonthlyClimbingTrackParams } from "@/entities/climbing/api";

/** 등산객의 전체 등산기록 조회 */
export const useGetClimbingTrackSuspenseQuery = () => useSuspenseQuery(queries.climbing.getClimbingTrack);

/** 등산객의 월별 등산기록 조회 */
export const useGetMonthlyClimbingTrackSuspenseQuery = (params: RequestGetMonthlyClimbingTrackParams) =>
	useSuspenseQuery(queries.climbing.getMonthlyClimbingTrack(params));
