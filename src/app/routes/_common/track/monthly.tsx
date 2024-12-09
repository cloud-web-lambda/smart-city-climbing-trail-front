import { createFileRoute } from "@tanstack/react-router";

import { MonthlyTrackPage } from "@/pages/track/ui";

import { queries } from "@/features/common";

import type { TrackDTO } from "@/entities/climbing/api";
import { monthlyClimbingTrackSchema } from "@/entities/climbing/model";

export const Route = createFileRoute("/_common/track/monthly")({
	validateSearch: monthlyClimbingTrackSchema.parse,
	loaderDeps: ({ search }) => search,
	loader: async ({ context, deps }) => {
		const { queryClient } = context;
		await queryClient.ensureQueryData(queries.climbing.getMonthlyClimbingTrack(deps)).catch<TrackDTO>(() => {
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
	component: () => <MonthlyTrackPage />,
});
