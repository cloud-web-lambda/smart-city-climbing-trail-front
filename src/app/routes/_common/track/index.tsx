import { createFileRoute } from "@tanstack/react-router";

import { queries } from "@/features/common";

export const Route = createFileRoute("/_common/track/")({
	loader: async ({ context }) => {
		const { queryClient } = context;
		await queryClient.ensureQueryData(queries.climbing.getClimbingTrack);
	},
	component: () => <></>,
});
