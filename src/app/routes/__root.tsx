import { Suspense } from "react";

import { createRootRoute, Outlet } from "@tanstack/react-router";

import { RootLayout } from "@/app/ui/Layout";

import { Toast } from "@/shared/ui/components";

export const Route = createRootRoute({
	component: () => (
		<>
			<RootLayout>
				<Outlet />
			</RootLayout>
			<Suspense fallback={null}>
				<Toast />
			</Suspense>
		</>
	),
});
