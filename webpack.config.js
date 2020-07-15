const path = require("path");

module.exports = {
  entry: "./src/index.js", // relative path
  output: {
    path: path.join(__dirname, "public"), // absolute path
    filename: "covid-care-bundle.js", // file name
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
