import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_common/")({
	component: () => <></>,
});
