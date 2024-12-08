import { createQueryKeys } from "@lukemorales/query-key-factory";

import { getMeApi, getMyWeightApi } from "@/entities/users/api";

export const usersQueryKeys = createQueryKeys("users", {
	getMe: {
		queryKey: ["getMe"],
		queryFn: getMeApi,
	},
	getMyWeight: {
		queryKey: ["getMyWeight"],
		queryFn: getMyWeightApi,
	},
});
