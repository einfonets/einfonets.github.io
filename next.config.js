const path = require("path");
const { default: baseUrl } = require("./utils/baseUrl");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/*",
        destination: `${baseUrl}/api/*`,
      },
    ];
  },
};
