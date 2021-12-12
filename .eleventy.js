const eleventyPluginSEO = require("eleventy-plugin-seo");

module.exports = (eleventyConfig) => {
  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Because we're running PostCSS as a separate process, Eleventy doesn't know when styles have changed
  // Tell Eleventy to watch this CSS file so it can live-update changes into the browser for us
  eleventyConfig.addWatchTarget("./dist/index.css");

  // Enables the SEO plugin
  eleventyConfig.addPlugin(eleventyPluginSEO, {
    title: "espi.me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://espi.me",
    author: "Espi",
    twitter: "sysdotini",
    image: "/img/icon.png",
    options: {
      titleStyle: "minimalistic",
      titleDivider: "|",
      imageWithBaseUrl: true,
      twitterCardType: "summary_large_image",
      showPageNumbers: true,
    },
  });

  return {
    dir: {
      input: "./src/",
      output: "./dist/",
    },
  };
};
