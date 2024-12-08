import { createLazyFileRoute } from "@tanstack/react-router";

import { NewTrackPage } from "@/pages/track/ui";

import { TrackHandler } from "@/features/climbing/ui";

export const Route = createLazyFileRoute("/_common/home/new-track")({
	component: () => (
		<TrackHandler requiredTrack>
			<NewTrackPage />
		</TrackHandler>
	),
});
