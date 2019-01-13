module.exports = {
  target: "web",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "wordsearch.min.js",
    library: ["WordSearch"],
    libraryTarget: "umd",
    umdNamedDefine: true
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
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  }
};
