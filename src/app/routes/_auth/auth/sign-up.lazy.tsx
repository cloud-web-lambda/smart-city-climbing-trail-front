import { createLazyFileRoute } from "@tanstack/react-router";

import { SignUpPage } from "@/pages/auth/ui";

export const Route = createLazyFileRoute("/_auth/auth/sign-up")({
	component: () => <SignUpPage />,
});
