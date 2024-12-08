import { createLazyFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home/ui";

import { TrackHandler } from "@/features/climbing/ui";

export const Route = createLazyFileRoute("/_common/home/")({
	component: () => (
		<TrackHandler requiredTrack={false}>
			<HomePage />
		</TrackHandler>
	),
});
