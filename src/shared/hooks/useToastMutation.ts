import { useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

import { getKyHTTPError, isKyHTTPError } from "@/shared/api";
import { useToast } from "@/shared/ui/components";

type SuccessToast<TData> = {
	hasSuccessToast: true;
	successKey: keyof TData | string[];
};

type NotSuccessToast = {
	hasSuccessToast: false;
};

type SuccessToastOption<TData> = SuccessToast<TData> | NotSuccessToast;

type ToastMutationOptions<TData, TError, TVariables, TContext> = Omit<
	UseMutationOptions<TData, TError, TVariables, TContext>,
	"mutationFn"
> &
	SuccessToastOption<TData> & {
		hasErrorToast: boolean;
	};

export const useToastMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
	options: ToastMutationOptions<TData, TError, TVariables, TContext> & {
		mutationFn: (variables: TVariables) => Promise<TData>;
	},
): UseMutationResult<TData, TError, TVariables, TContext> => {
	const { addToast } = useToast();
	const { onSuccess, onError, hasErrorToast, ...restOptions } = options;

	const successKey = checkHasSuccessToast(restOptions) ? restOptions.successKey : null;

	return useMutation({
		...restOptions,
		onSuccess: async (data, variables, context) => {
			if (successKey) {
				const message = getSuccessToastMessage(data, successKey);
				if (message) addToast({ message, state: "positive" });
			}
			await onSuccess?.(data, variables, context);
		},
		onError: async (error, variables, context) => {
			if (hasErrorToast && isKyHTTPError(error)) {
				const { message } = await getKyHTTPError(error);
				addToast({ message, state: "negative" });
			}
			await onError?.(error, variables, context);
		},
	});
};

const getSuccessToastMessage = <TData>(data: TData, successKey: SuccessToast<TData>["successKey"]): string | null => {
	if (Array.isArray(successKey)) {
		return successKey.reduce((acc: unknown, key: string) => {
			if (acc && typeof acc === "object" && key in acc) {
				return (acc as { [key: string]: unknown })[key];
			}
			return null;
		}, data) as string | null;
	}
	return data[successKey] as string | null;
};

const checkHasSuccessToast = <TData>(options: SuccessToastOption<TData>): options is SuccessToast<TData> => {
	return !!options.hasSuccessToast;
};
