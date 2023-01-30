import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildResolvers(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //не будем указывать расширение
  };
}
