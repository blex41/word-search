const baseConfig = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/",
    library: "WordSearch"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

/**
 * This library needs to work in browsers and in NodeJS,
 * so we declare both configs here.
 */

const nodeConfig = {
  ...baseConfig,
  target: "node",
  output: {
    ...baseConfig.output,
    filename: "wordsearch.node.js",
    libraryTarget: "umd"
  }
};

const webConfig = {
  ...baseConfig,
  target: "web",
  output: {
    ...baseConfig.output,
    filename: "wordsearch.min.js"
  }
};

module.exports = [nodeConfig, webConfig];
