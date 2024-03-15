const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy({
        "assets": "assets",
        "content/images": "assets/images",
        "content/images/favicon.ico": "/",
        "./node_modules/water.css/out/light.min.css": "assets/styles/water.css"
    });

    return {
        dir: {
            input: "content",
            includes: "../_includes"
        }
    }
};