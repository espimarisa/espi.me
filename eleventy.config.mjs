import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("./src");
  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.setIncludesDirectory("_includes");

  // Sets Liquid options
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  });

  // Passthrough directories
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");

  // Syntax highlighting support
  eleventyConfig.addPlugin(syntaxHighlight);

  // Date formatter filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return dateObj.toLocaleString(undefined, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  });
}
