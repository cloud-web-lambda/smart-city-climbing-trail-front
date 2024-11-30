import { createRootRoute, Outlet } from "@tanstack/react-router";

import { RootLayout } from "@/app/ui/Layout";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootLayout>
			<Outlet />
		</RootLayout>
	);
}
