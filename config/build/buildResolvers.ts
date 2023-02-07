import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/buildOptions";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //не будем указывать расширение
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
