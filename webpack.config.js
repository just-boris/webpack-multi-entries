const path = require("path");
module.exports = ["foo", "bar"].map((theme) => ({
  entry: "./src/index.js",
  output: {
    path: path.resolve(`dist/${theme}`),
  },
  resolve: {
    alias: {
      "~current-theme": path.resolve(`./src/themes/${theme}`),
    },
  },
}));
