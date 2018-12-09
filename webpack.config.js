//var webpack = require("webpack");
//var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
  target: "web",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "wordsearch.min.js",
    library: ["WordSearch"]
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
