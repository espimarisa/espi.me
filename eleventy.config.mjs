import eleventyPluginTinyHTML from "@sardine/eleventy-plugin-tinyhtml";
import automaticNoopener from "eleventy-plugin-automatic-noopener";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	// Directories
	eleventyConfig.setInputDirectory("./src");
	eleventyConfig.setOutputDirectory("./_site");
	eleventyConfig.setLayoutsDirectory("_layouts");
	eleventyConfig.setIncludesDirectory("_includes");
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/img");

	// Sets Liquid options
	eleventyConfig.setLiquidOptions({
		dynamicPartials: false,
		strictFilters: true,
	});

	// Date formatter filter
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return dateObj.toLocaleString(undefined, {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		});
	});

	eleventyConfig.addPlugin(automaticNoopener);

	// Minification
	if (IS_PRODUCTION) {
		eleventyConfig.addPlugin(eleventyPluginTinyHTML, {
			collapseBooleanAttributes: true,
			collapseInlineTagWhitespace: true,
			collapseWhitespace: true,
			conservativeCollapse: true,
			decodeEntities: true,
			includeAutoGeneratedTags: false,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: true,
			preventAttributesEscaping: true,
			processConditionalComments: true,
			removeAttributeQuotes: false,
			removeComments: true,
			removeEmptyAttributes: true,
			removeOptionalTags: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			sortAttributes: true,
			sortClassName: true,
			trimCustomFragments: true,
			useShortDoctype: true,
		});
	}
}
