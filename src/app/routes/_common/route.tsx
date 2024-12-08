import { createFileRoute, Outlet } from "@tanstack/react-router";

import { BottomNavigation, CommonLayout } from "@/app/ui/Layout";

import { AfterAuthorizedLayout } from "@/features/users/ui";

export const Route = createFileRoute("/_common")({
	component: () => (
		<AfterAuthorizedLayout>
			<CommonLayout>
				<Outlet />
				<BottomNavigation />
			</CommonLayout>
		</AfterAuthorizedLayout>
	),
});
