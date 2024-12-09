import { useSearch } from "@tanstack/react-router";

import { TotalTrackInfo } from "@/widgets/track/ui";

import { useGetMonthlyClimbingTrackSuspenseQuery } from "@/features/climbing/api";

const Track: React.FC = () => {
	const { month, year } = useSearch({ from: "/_common/track/monthly" });
	const { data } = useGetMonthlyClimbingTrackSuspenseQuery({ month, year });

	return <TotalTrackInfo track={data} />;
};

export default Track;
