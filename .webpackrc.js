const path = require("path");

export default {
  hash: true,
  html: { template: "./src/index.ejs" },
  alias: {
    "@": `${__dirname}/src`,
  },
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "lodash",
        libraryDirectory: "",
        camel2DashComponentName: false, // default: true
      },
      "lodash",
    ],
  ],
};
