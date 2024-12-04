import type { TokenDTO } from "@/entities/users/api";

export interface RequestSignUpDTO {
	email: string;
	password: string;
}

export interface RequestSignInDTO extends RequestSignUpDTO {}

export interface SignUpDTO {
	message: string;
	sub: string;
}

export interface SignInDTO extends TokenDTO {
	message: string;
	idToken: string;
}

export interface RequestConfirmCodeDTO {
	sub: string;
	confirmationCode: string;
}

export interface ConfirmCodeResponse {
	$metadata: {
		httpStatusCode: number;
		requestId: string;
		attempts: number;
		totalRetryDelay: number;
	};
	Session: string;
}

export interface ConfirmCodeDTO {
	message: string;
	confirmResponse: ConfirmCodeResponse;
}

export interface RefreshDTO extends Omit<SignInDTO, "message"> {}
