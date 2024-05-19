import { presetForms } from "@julr/unocss-preset-forms";
import {
	defineConfig,
	presetIcons,
	presetWind,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	content: {
		filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
	},
	presets: [presetWind({ dark: "media" }), presetIcons(), presetForms()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
