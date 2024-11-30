import { createRouter, RouterProvider } from "@tanstack/react-router";

import queryClient from "./queryClient";

import { routeTree } from "@/routeTree.gen";

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const router = createRouter({ routeTree, context: { queryClient } });

const TanstackRouterProvider: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default TanstackRouterProvider;
