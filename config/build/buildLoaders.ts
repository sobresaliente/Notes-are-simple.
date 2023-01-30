import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildLoaders(): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/, //регулярка для ts и tsx
    use: "ts-loader",
    exclude: /node_modules/,
  }; // выносим тк порядок лоадеров важен

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  return [tsLoader, scssLoader];
}
