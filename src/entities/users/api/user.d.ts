export interface UnLoginedMeDTO {}

export interface LoginedMeDTO {
	username: string;
	email: string;
	isValid: boolean;
}

export type MeDTO = UnLoginedMeDTO | LoginedMeDTO;

export interface TokenDTO {
	accessToken: string;
	refreshToken: string;
}

export interface WeightDTO {
	sub: string;
	weight: number | null;
}

export interface RequestSaveMyWeightBody {
	weight: string;
}
