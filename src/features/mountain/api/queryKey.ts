import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getMountainInfoApi, type RequestGetMountainInfoParams } from "@/entities/mountain/api";

export const mountainQueryKeys = createQueryKeys("mountain", {
	getMountainInfo: (params: RequestGetMountainInfoParams) => ({
		queryKey: ["getMountainInfo", params],
		queryFn: () => getMountainInfoApi(params),
	}),
});
