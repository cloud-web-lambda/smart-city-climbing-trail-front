import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
	const envDir = "env";
	const env = loadEnv(mode, envDir);

	return {
		envDir,
		logLevel: "info",
		resolve: {
			extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
			alias: [{ find: "@", replacement: path.resolve("src") }],
		},
		server: {
			port: parseInt(env.VITE_PORT),
		},
		preview: {
			port: parseInt(env.VITE_PORT),
		},
		css: {
			postcss: {
				plugins: [autoprefixer({})],
			},
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
					quietDeps: true,
					logger: {
						warn: function (message: string) {
							console.warn(message);
						},
						debug: function (message: string) {
							console.log(message);
						},
					},
				},
			},
		},
		plugins: [
			react(),
			tsconfigPaths(),
			svgr(),
			dynamicImport(),
			TanStackRouterVite({
				routesDirectory: "src/app/routes",
			}),
			nodePolyfills(),
		],
	};
});
