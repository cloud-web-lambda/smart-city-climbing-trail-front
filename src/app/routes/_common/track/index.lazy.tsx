import { createLazyFileRoute } from "@tanstack/react-router";

import { TrackPage } from "@/pages/track/ui";

export const Route = createLazyFileRoute("/_common/track/")({
	component: () => <TrackPage />,
});
