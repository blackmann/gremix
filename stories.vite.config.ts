import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
	root: "./stories",
	server: {
		port: 9876,
	},
	plugins: [react(), UnoCSS(), tsconfigPaths()],
});

export default config;
