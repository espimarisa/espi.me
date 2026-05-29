/**
 * @file Astro configuration file.
 * @author Espi Marisa <hi@espi.me>
 * @license Zlib
 */

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import compress from "astro-compress";
import favicons from "astro-favicons";
import icon from "astro-icon";

export default defineConfig({
	compressHTML: true,
	devToolbar: {
		enabled: false,
	},
	fonts: [
		{
			cssVariable: "--font-atkinson-hyperlegible-next",
			name: "Atkinson Hyperlegible Next",
			provider: fontProviders.fontsource(),
			styles: ["normal", "italic"],
			weights: [400, 500, 600, 700],
		},
	],
	markdown: {
		shikiConfig: {
			themes: {
				dark: "catppuccin-mocha",
				light: "catppuccin-latte",
			},
		},
	},
	integrations: [
		mdx(),
		sitemap(),
		compress(),
		icon(),
		favicons({
			name: "Espi Marisa",
			short_name: "Espi Marisa",
			themes: ["#dce0e8", "#11111b"],
		}),
	],
	site: "https://espi.me",
	output: "static",
});
