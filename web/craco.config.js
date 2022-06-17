const path = require("path");
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (webpackConfig.mode === "development" && process.env.IN_GAME_DEV) {
        webpackConfig.devtool = "eval-source-map";
        webpackConfig.output.path = path.join(__dirname, "build");
      }

      return webpackConfig;
    },
  },

  devServer: (devServerConfig) => {
    if (process.env.IN_GAME_DEV) 
        devServerConfig.writeToDisk = true;
    return devServerConfig;
  },
};
