export interface MeDTO {
	username: string;
	email: string;
	isValid: boolean;
}

export interface TokenDTO {
	accessToken: string;
	refreshToken: string;
}
