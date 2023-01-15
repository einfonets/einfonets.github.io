const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  //   async rewrites() {
  //     return [
  //       {
  //         source: "/api/*",
  //         destination: `https://einfonets.com/api/*`,
  //       },
  //     ];
  //   },
};
