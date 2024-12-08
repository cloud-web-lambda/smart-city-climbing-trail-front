import { createLazyFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_common/")({
	component: () => <Navigate to="/auth" replace />,
});
