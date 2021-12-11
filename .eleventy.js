module.exports = (eleventyConfig) => {
  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Because we're running PostCSS as a separate process, Eleventy doesn't know when styles have changed
  // Tell Eleventy to watch this CSS file so it can live-update changes into the browser for us
  eleventyConfig.addWatchTarget("./dist/index.css");

  return {
    dir: {
      input: "./src/",
      output: "./dist/",
    },
  };
};
