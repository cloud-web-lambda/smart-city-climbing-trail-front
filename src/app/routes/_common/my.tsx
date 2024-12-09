import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { MyPage } from "@/pages/my/ui";

const schema = z.object({
	isEditWeight: z.boolean().catch(false),
});

export const Route = createFileRoute("/_common/my")({
	validateSearch: schema.parse,
	component: () => <MyPage />,
});
