import ky, { HTTPError } from "ky";

import config from "@/shared/config";

export const apiClient = ky.create({
	prefixUrl: config.API_URL,
	retry: 0,
});

export const isKyHTTPError = (error: unknown): error is HTTPError => {
	return error instanceof HTTPError;
};

export const getKyHTTPError = async <T>(error: HTTPError) => {
	return await error.response.json<T>();
};
