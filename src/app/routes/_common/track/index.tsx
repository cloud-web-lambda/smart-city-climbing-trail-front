import { createFileRoute } from "@tanstack/react-router";

import { TrackPage } from "@/pages/track/ui";

export const Route = createFileRoute("/_common/track/")({
	component: () => <TrackPage />,
});
