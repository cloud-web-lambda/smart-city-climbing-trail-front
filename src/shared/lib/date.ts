import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

interface TimeDifference {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const calculateTimeDifference = (startDate: string | Date | Dayjs, endDate: string | Date | Dayjs): TimeDifference => {
	const start = dayjs(startDate);
	const end = dayjs(endDate);

	const diffInSeconds = end.diff(start, "second");

	const days = Math.floor(diffInSeconds / (24 * 3600));
	const hours = Math.floor((diffInSeconds % (24 * 3600)) / 3600);
	const minutes = Math.floor((diffInSeconds % 3600) / 60);
	const seconds = diffInSeconds % 60;

	return {
		days,
		hours,
		minutes,
		seconds,
	};
};

const formatTimeDifference = (diff: TimeDifference): string => {
	const parts: string[] = [];

	if (diff.days > 0) {
		parts.push(`${diff.days}일`);
	}
	if (diff.hours > 0) {
		parts.push(`${diff.hours}시간`);
	}
	if (diff.minutes > 0) {
		parts.push(`${diff.minutes}분`);
	}
	if (diff.seconds > 0 || parts.length === 0) {
		parts.push(`${diff.seconds}초`);
	}

	return parts.join(" ");
};

export { dayjs, calculateTimeDifference, formatTimeDifference };
