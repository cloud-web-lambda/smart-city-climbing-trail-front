import { TotalTrackInfo } from "@/widgets/track/ui";

import { useGetClimbingTrackSuspenseQuery } from "@/features/climbing/api";

const Track: React.FC = () => {
	const { data } = useGetClimbingTrackSuspenseQuery();

	return <TotalTrackInfo track={data} />;
};

export default Track;
