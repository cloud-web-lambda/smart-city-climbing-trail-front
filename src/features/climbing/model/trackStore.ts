import { create } from "zustand";
import { persist } from "zustand/middleware";

import { TRACK_STORE_KEY } from "@/features/climbing/constants";

import type { RequestSaveClimbingTrackBody } from "@/entities/climbing/api";

interface Track extends Omit<RequestSaveClimbingTrackBody, "startDate" | "endDate"> {
	startDate: RequestSaveClimbingTrackBody["startDate"] | null;
	endDate: RequestSaveClimbingTrackBody["endDate"] | null;
}

interface TrackStore {
	track: Track | null;
	setTrack: (track: Track) => void;
	clear: () => void;
}

export const useTrackStore = create(
	persist<TrackStore>(
		(set) => ({
			track: null,
			setTrack: (track) => set({ track }),
			clear: () => set({ track: null }),
		}),
		{ name: TRACK_STORE_KEY },
	),
);
