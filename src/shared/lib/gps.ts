import type { Coordinates } from "@/shared/model";

export const hasGeolocationObject = () => {
	return !!navigator.geolocation;
};

export interface GetGPSLocationSuccess extends Coordinates {}

export interface GetGPSLocationError {
	message: string;
}

export const getGPSLocation = () => {
	return new Promise<GetGPSLocationSuccess>((res, rej) => {
		if (!hasGeolocationObject()) rej({ message: "GPS를 사용할 수 없습니다." });
		navigator.geolocation.getCurrentPosition(
			(position) => {
				res({ lat: position.coords.latitude.toString(), lng: position.coords.longitude.toString() });
			},
			() => rej({ message: "위치 정보 권한을 허용해주세요." }),
			{ enableHighAccuracy: true, maximumAge: 2_000, timeout: 5_000 },
		);
	});
};

export const checkIsGPSLocationError = (err: unknown): err is GetGPSLocationError => {
	return !!err && typeof err === "object" && "message" in err;
};
