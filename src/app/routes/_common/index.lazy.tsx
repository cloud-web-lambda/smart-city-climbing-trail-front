import { createLazyFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/pages/home/ui";

export const Route = createLazyFileRoute("/_common/")({
	component: () => <HomePage />,
});
