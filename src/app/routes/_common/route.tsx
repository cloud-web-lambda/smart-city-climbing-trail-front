import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AfterAuthorizedLayout } from "@/features/users/ui";

export const Route = createFileRoute("/_common")({
	component: () => (
		<AfterAuthorizedLayout>
			<Outlet />
		</AfterAuthorizedLayout>
	),
});
