import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { queries } from "@/features/common";

import { saveMyWeightApi, WeightDTO } from "@/entities/users/api";

import { useToastMutation } from "@/shared/hooks";

export const useSaveMyWeightMutation = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return useToastMutation({
		hasErrorToast: true,
		hasSuccessToast: false,
		mutationFn: saveMyWeightApi,
		onSuccess: async (_, { weight }) => {
			const prevData = queryClient.getQueryData<WeightDTO>(queries.users.getMyWeight.queryKey);
			queryClient.setQueryData<WeightDTO>(queries.users.getMyWeight.queryKey, {
				sub: prevData?.sub || "",
				weight: parseInt(weight, 10),
			});
			await queryClient.invalidateQueries(queries.users.getMyWeight);
			await navigate({ to: "/my", search: { isEditWeight: false }, replace: true });
		},
	});
};
