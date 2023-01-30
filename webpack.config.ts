import path from "path";
import webpack from "webpack";
import { webpackConfig } from "./config/build/webpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/buildOptions";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  htmlPath: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  const config: webpack.Configuration = webpackConfig({
    mode,
    paths: paths,
    isDev,
    port: PORT,
  });
  console.log("Started in " + mode + " mode on " + PORT + " port");

  return config;
};
