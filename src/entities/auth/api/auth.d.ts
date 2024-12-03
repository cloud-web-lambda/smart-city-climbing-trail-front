export interface RequestSignUpDTO {
	email: string;
	password: string;
}

export interface SignUpDTO {
	message: string;
	sub: string;
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
