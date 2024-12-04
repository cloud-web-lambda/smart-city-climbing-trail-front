import { authApiClient } from "@/entities/common/api";
import type { MeDTO } from "@/entities/users/api/user";

/** 본인 정보 조회 */
export const getMeApi = () => authApiClient.get<MeDTO>("access").json();
