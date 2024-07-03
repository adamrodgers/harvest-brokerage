module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addWatchTarget("tailwind.config.js");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
