import { create } from "zustand";

import type { TrailDTO } from "@/entities/climbing/api";

interface RecommendTrailStore {
	trail: TrailDTO | null;
	setTrail: (trail: TrailDTO) => void;
	clear: () => void;
}

export const useRecommendTrailStore = create<RecommendTrailStore>((set) => ({
	trail: null,
	setTrail: (trail) => set({ trail }),
	clear: () => set({ trail: null }),
}));
