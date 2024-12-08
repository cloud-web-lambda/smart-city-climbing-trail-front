export interface RequestGetMountainInfoParams {
	trailName: string;
}

export interface WeatherDTO {
	temperature: number;
	condition: number;
	windSpeed: number;
	rainWarning: boolean;
	windWarning: boolean;
}

export interface AirQualityDTO {
	/** 미세먼지 지수 (PM10) */
	fineDustIndex: number;
	/** 초미세먼지 지수 (PM2.5) */
	ultrafineDustIndex: number;
	/** 미세먼지 상태 */
	fineDustStatus: string;
	/** 초미세먼지 상태 */
	ultrafineDustStatus: string;
}

export interface SunTimeDTO {
	/** 일출 시간 (현지 시간) */
	sunrise: string;
	/** 일몰 시간 (현지 시간) */
	sunset: string;
}

export interface MountainInfoResponse {
	weather: WeatherDTO;
	airQuality: AirQualityDTO;
	sunTimes: SunTimeDTO;
}
