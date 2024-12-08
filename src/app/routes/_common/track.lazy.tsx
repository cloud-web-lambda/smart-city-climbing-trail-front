import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_common/track")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello </div>;
}
