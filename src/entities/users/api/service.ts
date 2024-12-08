import { authApiClient } from "@/entities/common/api";
import type { LoginedMeDTO, WeightDTO } from "@/entities/users/api/user";

/** 본인 정보 조회 */
export const getMeApi = () => authApiClient.get<LoginedMeDTO>("access").json();

/** 등산객의 신체정보(몸무게) 조회 */
export const getMyWeightApi = () => authApiClient.get<WeightDTO>("hikers").json();
