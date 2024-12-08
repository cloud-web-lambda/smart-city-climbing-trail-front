import { type PropsWithChildren, useLayoutEffect } from "react";

import { useNavigate } from "@tanstack/react-router";

import { useTrackStore } from "@/features/climbing/model";

interface Props extends PropsWithChildren {
	requiredTrack: boolean;
}

const TrackHandler: React.FC<Props> = ({ children, requiredTrack }) => {
	const navigate = useNavigate();
	const { track } = useTrackStore();

	useLayoutEffect(() => {
		if (requiredTrack && !track) navigate({ to: "/home", replace: true });
		if (!requiredTrack && track) navigate({ to: "/home/new-track", replace: true });
	}, [navigate, requiredTrack, track]);

	return <>{children}</>;
};

export default TrackHandler;
