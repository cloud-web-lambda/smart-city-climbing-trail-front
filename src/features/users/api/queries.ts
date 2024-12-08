import { useSuspenseQuery } from "@tanstack/react-query";

import { queries } from "@/features/common";

/** 등산객의 신체정보(몸무게) 조회 */
export const useGetMyWeightSuspenseQuery = () => useSuspenseQuery(queries.users.getMyWeight);
