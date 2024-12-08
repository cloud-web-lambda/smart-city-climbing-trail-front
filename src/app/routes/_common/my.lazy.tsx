import { createLazyFileRoute } from "@tanstack/react-router";

import { MyPage } from "@/pages/my/ui";

export const Route = createLazyFileRoute("/_common/my")({
	component: () => <MyPage />,
});
