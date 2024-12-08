import { type inferQueryKeyStore, mergeQueryKeys } from "@lukemorales/query-key-factory";

import { climbingQueryKeys } from "@/features/climbing/api";
import { mountainQueryKeys } from "@/features/mountain/api";
import { usersQueryKeys } from "@/features/users/api";

export const queries = mergeQueryKeys(usersQueryKeys, mountainQueryKeys, climbingQueryKeys);
export type QueryKeys = inferQueryKeyStore<typeof queries>;
