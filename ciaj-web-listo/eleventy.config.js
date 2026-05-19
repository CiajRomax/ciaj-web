module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/uploads");
  eleventyConfig.addPassthroughCopy("src/valimax.html");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return new Intl.DateTimeFormat("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date(dateObj));
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};
