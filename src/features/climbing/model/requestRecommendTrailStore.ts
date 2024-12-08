import { create } from "zustand";

import type { RequestGetClimbingTrailParams } from "@/entities/climbing/api";

interface RequestRecommendTrail {
	params: RequestGetClimbingTrailParams;
	responseTrailNames: string[];
	isFetching: boolean;
	setIsFetching: (value: boolean) => void;
	addResponseTrailNames: (trailName: string) => void;
	clearResponseTrailNames: () => void;
	setParams: (params: RequestGetClimbingTrailParams) => void;
	clear: () => void;
}

const initialRequestRecommendTrail: RequestGetClimbingTrailParams = {
	difficulty: "easy",
	lat: "",
	lng: "",
};

export const useRequestRecommendTrailStore = create<RequestRecommendTrail>((set, get) => ({
	params: initialRequestRecommendTrail,
	responseTrailNames: [],
	isFetching: false,
	setIsFetching: (value) => set({ isFetching: value }),
	setParams: (params) => set({ params }),
	addResponseTrailNames: (trailName) => set({ responseTrailNames: [...get().responseTrailNames, trailName] }),
	clearResponseTrailNames: () => set({ responseTrailNames: [] }),
	clear: () => set({ params: initialRequestRecommendTrail, responseTrailNames: [] }),
}));
