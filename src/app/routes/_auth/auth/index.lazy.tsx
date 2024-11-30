import { createLazyFileRoute } from "@tanstack/react-router";

import { LoginPage } from "@/pages/auth/ui";

export const Route = createLazyFileRoute("/_auth/auth/")({
	component: () => <LoginPage />,
});
