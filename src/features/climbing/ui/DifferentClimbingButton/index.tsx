import { useGetDifferentClimbingTrailMutation } from "@/features/climbing/api";
import { useRecommendTrailStore, useRequestRecommendTrailStore } from "@/features/climbing/model";

import { Button } from "@/shared/ui/components";

interface Props {
	className?: string;
}

const DifferentClimbingButton: React.FC<Props> = ({ className }) => {
	const { params, setIsFetching, responseTrailNames, addResponseTrailNames } = useRequestRecommendTrailStore();
	const { setTrail, clear } = useRecommendTrailStore();

	const { mutateAsync: getDifferentClimbingTrail } = useGetDifferentClimbingTrailMutation();

	const onClick = async () => {
		setIsFetching(true);
		try {
			clear();
			const data = await getDifferentClimbingTrail({
				...params,
				excludedMountains: JSON.stringify(responseTrailNames),
			});
			addResponseTrailNames(data.trailName);
			setTrail(data);
		} finally {
			setIsFetching(false);
		}
	};

	return (
		<Button type="button" buttonType="outlined" className={className} onClick={onClick}>
			대체 등산로 추천
		</Button>
	);
};

export default DifferentClimbingButton;
