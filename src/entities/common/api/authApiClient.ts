import ky from "ky";

import type { RefreshDTO } from "@/entities/auth/api";
import { TOKEN_EXPIRED_EVENT_NAME, TOKEN_EXPIRED_HTTP_MESSAGE } from "@/entities/users/constants";
import { getAccessToken, getEmail, getTokens, removeTokens, setTokens } from "@/entities/users/lib";

import { apiClient, getKyHTTPError, isKyHTTPError } from "@/shared/api";
import config from "@/shared/config";
import { PromiseHolder } from "@/shared/lib";

const promiseHolder = new PromiseHolder();

export const authApiClient = apiClient.extend({
	hooks: {
		beforeRequest: [
			async (request) => {
				if (promiseHolder.isLocked) await promiseHolder.promise;
				const abortController = new AbortController();

				const accessToken = getAccessToken();
				if (!accessToken) abortController.abort();
				else request.headers.set("Authorization", `Bearer ${accessToken}`);

				return { ...request, signal: abortController.signal };
			},
		],
		beforeError: [
			async (error) => {
				if (!isKyHTTPError(error)) return error;
				const { message } = await getKyHTTPError(error);
				if (message !== TOKEN_EXPIRED_HTTP_MESSAGE) return error;

				try {
					const { accessToken, refreshToken } = getTokens();
					const email = getEmail();
					if (!accessToken || !refreshToken || !email) throw new Error();

					if (promiseHolder.isLocked) await promiseHolder.promise;
					promiseHolder.hold();

					const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await ky
						.post<RefreshDTO>(`${config.API_URL}/refresh`, {
							json: { email, accessToken, refreshToken },
						})
						.json();

					setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken });
					error.request.headers.set("Authorization", `Bearer ${newAccessToken}`);
					promiseHolder.successRelease();
					void (await authApiClient(error.request));
				} catch {
					promiseHolder.failRelease();
					removeTokens();
					// TODO: handle token expired event
					void window.dispatchEvent(new CustomEvent(TOKEN_EXPIRED_EVENT_NAME));
				}

				return error;
			},
		],
	},
});
