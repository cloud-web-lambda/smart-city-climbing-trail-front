import { createLazyFileRoute } from "@tanstack/react-router";

import { SignInPage } from "@/pages/auth/ui";

export const Route = createLazyFileRoute("/_auth/auth/")({
	component: () => <SignInPage />,
});
