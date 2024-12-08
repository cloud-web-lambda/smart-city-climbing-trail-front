import { createFileRoute } from "@tanstack/react-router";

import { TrackPage } from "@/pages/track/ui";

import { queries } from "@/features/common";

import { TrackDTO } from "@/entities/climbing/api";

export const Route = createFileRoute("/_common/track/")({
	loader: async ({ context }) => {
		const { queryClient } = context;
		await queryClient.ensureQueryData(queries.climbing.getClimbingTrack).catch<TrackDTO>(() => {
			return {
				averageCalories: 0,
				averageDistance: 0,
				averageHikingTime: 0,
				totalCalories: 0,
				totalDistance: 0,
				totalHikingTime: 0,
				trails: [],
			};
		});
	},
	component: () => <TrackPage />,
});
