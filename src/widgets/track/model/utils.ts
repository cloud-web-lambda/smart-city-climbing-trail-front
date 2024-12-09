import { TrackDTO } from "@/entities/climbing/api";

type TrackWithCount = {
	[track: string]: number;
};

export const getTrackWithCount = (track: TrackDTO): TrackWithCount | null => {
	if (track.trails.length === 0) return null;
	return track.trails.reduce<TrackWithCount>((acc, cur) => {
		if (acc?.[cur]) return { ...acc, [cur]: acc[cur] + 1 };
		return { ...acc, [cur]: 1 };
	}, {});
};
