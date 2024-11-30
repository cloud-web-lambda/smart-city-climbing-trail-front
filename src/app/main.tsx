import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TanstackQueryProvider, TanstackRouterProvider } from "@/app/Providers";

import "@/app/ui/styles/global.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TanstackQueryProvider>
			<TanstackRouterProvider />
		</TanstackQueryProvider>
	</StrictMode>,
);
