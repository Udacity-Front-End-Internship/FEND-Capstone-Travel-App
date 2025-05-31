import Dotenv from "dotenv-webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { GenerateSW } from "workbox-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    libraryTarget: "var",
    library: "Client",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new Dotenv({
      path: "./.env",
      systemvars: true,
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      // disableDevLogs: true,
    }),
  ],
  resolve: {
    fallback: {
      crypto: false,
      path: false,
      os: false,
    },
  },
};
