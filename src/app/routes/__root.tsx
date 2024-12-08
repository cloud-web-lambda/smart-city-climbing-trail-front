import { Suspense } from "react";

import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { AuthHandler } from "@/app/Handlers";
import { RootLayout } from "@/app/ui/Layout";

import { queries } from "@/features/common";

import type { UnLoginedMeDTO } from "@/entities/users/api";

import { Toast } from "@/shared/ui/components";

import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
	loader: async ({ context: { queryClient } }) => {
		console.log("here.");
		return await queryClient.ensureQueryData(queries.users.getMe).catch<UnLoginedMeDTO>(() => {
			return {};
		});
	},
	component: () => (
		<>
			<AuthHandler />
			<RootLayout>
				<Outlet />
			</RootLayout>
			<Suspense fallback={null}>
				<Toast />
			</Suspense>
		</>
	),
});
