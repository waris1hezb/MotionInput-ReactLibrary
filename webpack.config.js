// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { DIR } = process.env;

module.exports = {
  /**
   * The mode of the build, either "development" or "production".
   * @type {string}
   */
  mode: "development",
  /**
   * The type of source map to use.
   * @type {string}
   */
  devtool: "cheap-module-source-map",
  /**
   * The entry point of the application.
   * @type {string}
   */
  entry: `./demo/src/index.jsx`,
  /**
   * The output configuration.
   * @type {Object}
   */
  output: {
    /**
     * The public path of the output files.
     * @type {string}
     */
    publicPath: "/",
  },
  /**
   * An array of plugins to use.
   * @type {Array}
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: `./demo/public/index.html`,
    }),
  ],
  /**
   * The module configuration.
   * @type {Object}
   */
  module: {
    /**
     * An array of rules to apply to modules.
     * @type {Array}
     */
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  /**
   * The resolve configuration.
   * @type {Object}
   */
  resolve: {
    /**
     * An array of file extensions to resolve.
     * @type {Array}
     */
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    /**
     * An object of aliases to use.
     * @type {Object}
     */
    alias: {
      "effects-library": `${__dirname}/dist`,
      components: `${__dirname}/demo/src/components`,
    },
  },
  /**
   * The dev server configuration.
   * @type {Object}
   */
  devServer: {
    /**
     * The port to run the dev server on.
     * @type {string}
     */
    port: process.env.PORT || "3000",
    /**
     * The static file configuration.
     * @type {Object}
     */
    static: {
      /**
       * The directory to serve static files from.
       * @type {string}
       */
      directory: `./demo/public`,
    },
    /**
     * Whether to fallback to index.html for 404s.
     * @type {boolean}
     */
    historyApiFallback: true,
  },
};
