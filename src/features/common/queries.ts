import { type inferQueryKeyStore, mergeQueryKeys } from "@lukemorales/query-key-factory";

import { usersQueryKeys } from "@/features/users/api";

export const queries = mergeQueryKeys(usersQueryKeys);
export type QueryKeys = inferQueryKeyStore<typeof queries>;
