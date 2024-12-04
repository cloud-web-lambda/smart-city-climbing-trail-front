import type { TokenDTO } from "@/entities/users/api";
import { ACCESS_TOKEN_KEY, EMAIL_KEY, REFRESH_TOKEN_KEY } from "@/entities/users/constants";

import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/shared/lib";
import type { Nullable } from "@/shared/model";

export const getAccessToken = (): string | null => {
	return getLocalStorage(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
	return getLocalStorage(REFRESH_TOKEN_KEY);
};

export const setAccessToken = (accessToken: string): void => {
	setLocalStorage(ACCESS_TOKEN_KEY, accessToken);
};

export const setRefreshToken = (refreshToken: string): void => {
	setLocalStorage(REFRESH_TOKEN_KEY, refreshToken);
};

export const getTokens = (): Nullable<TokenDTO> => {
	const accessToken = getAccessToken() ?? null;
	const refreshToken = getRefreshToken() ?? null;

	return { accessToken, refreshToken };
};

export const setTokens = ({ accessToken, refreshToken }: TokenDTO): void => {
	setAccessToken(accessToken);
	setRefreshToken(refreshToken);
};

export const removeAccessToken = (): void => {
	removeLocalStorage(ACCESS_TOKEN_KEY);
};

export const removeRefreshToken = (): void => {
	removeLocalStorage(REFRESH_TOKEN_KEY);
};

export const removeTokens = (): void => {
	removeAccessToken();
	removeRefreshToken();
};

export const getEmail = (): string | null => {
	return getLocalStorage(EMAIL_KEY);
};

export const setEmail = (email: string): void => {
	setLocalStorage(EMAIL_KEY, email);
};

export const removeEmail = (): void => {
	removeLocalStorage(EMAIL_KEY);
};
