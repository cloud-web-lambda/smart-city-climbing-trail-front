import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { MyPage } from "@/pages/my/ui";

import { queries } from "@/features/common";

import type { WeightDTO } from "@/entities/users/api";

const schema = z.object({
	isEditWeight: z.boolean().catch(false),
});

export const Route = createFileRoute("/_common/my")({
	validateSearch: schema.parse,
	loader: async ({ context }) => {
		const { queryClient } = context;
		await queryClient.ensureQueryData(queries.users.getMyWeight).catch<WeightDTO>(() => {
			return { sub: "", weight: null };
		});
	},
	component: () => <MyPage />,
});
