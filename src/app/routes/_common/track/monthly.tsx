import { createFileRoute } from "@tanstack/react-router";

import { MonthlyTrackPage } from "@/pages/track/ui";

import { monthlyClimbingTrackSchema } from "@/entities/climbing/model";

export const Route = createFileRoute("/_common/track/monthly")({
	validateSearch: monthlyClimbingTrackSchema.parse,
	component: () => <MonthlyTrackPage />,
});
