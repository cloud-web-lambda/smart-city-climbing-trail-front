import ky from "ky";

import config from "@/shared/config";

export const apiClient = ky.create({
	prefixUrl: config.API_URL,
	retry: 0,
});
