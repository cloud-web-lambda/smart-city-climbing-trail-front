import { useSuspenseQuery } from "@tanstack/react-query";

import { queries } from "@/features/common";

import type { RequestGetMountainInfoParams } from "@/entities/mountain/api";

export const useGetMountainInfoSuspenseQuery = (params: RequestGetMountainInfoParams) =>
	useSuspenseQuery(queries.mountain.getMountainInfo(params));
