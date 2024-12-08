import { createFileRoute } from "@tanstack/react-router";

import { MyPage } from "@/pages/my/ui";

import { queries } from "@/features/common";

export const Route = createFileRoute("/_common/my")({
	loader: async ({ context }) => {
		const { queryClient } = context;
		await queryClient.ensureQueryData(queries.users.getMyWeight);
	},
	component: () => <MyPage />,
});
