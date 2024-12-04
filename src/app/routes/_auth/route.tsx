import { createFileRoute, Outlet } from "@tanstack/react-router";

import { BeforeAuthorizedLayout } from "@/features/users/ui";

export const Route = createFileRoute("/_auth")({
	component: () => (
		<BeforeAuthorizedLayout>
			<Outlet />
		</BeforeAuthorizedLayout>
	),
});
