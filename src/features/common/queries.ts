import { type inferQueryKeyStore, mergeQueryKeys } from "@lukemorales/query-key-factory";

import { mountainQueryKeys } from "@/features/mountain/api";
import { usersQueryKeys } from "@/features/users/api";

export const queries = mergeQueryKeys(usersQueryKeys, mountainQueryKeys);
export type QueryKeys = inferQueryKeyStore<typeof queries>;
