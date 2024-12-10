import ky, { HTTPError } from "ky";

import type { ErrorDTO } from "@/shared/api/common";
import config from "@/shared/config";

export const apiClient = ky.create({
	prefixUrl: config.API_URL,
	retry: 0,
	timeout: false,
});

export const isKyHTTPError = (error: unknown): error is HTTPError<ErrorDTO> => {
	return error instanceof HTTPError;
};

export const getKyHTTPError = async (error: HTTPError<ErrorDTO>) => {
	return await error.response.json<ErrorDTO>();
};
