import { useRecommendTrailStore, useTrackStore } from "@/features/climbing/model";

import { Button } from "@/shared/ui/components";

const ConfirmTrailButton: React.FC = () => {
	const { trail, clear: clearRecommendTrail } = useRecommendTrailStore();
	const { setTrack, clear: clearTrack } = useTrackStore();

	const onClickButton = () => {
		if (!trail) return;
		clearTrack();
		const { trailName, distance } = trail;
		setTrack({ distance: parseInt(distance, 10), trailName, startDate: null, endDate: null });
		clearRecommendTrail();
	};

	return (
		<Button type="button" buttonType="secondary" full onClick={onClickButton}>
			확정
		</Button>
	);
};

export default ConfirmTrailButton;
