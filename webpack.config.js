const { resolve } = require('path');
const merge = require('webpack-merge');
const { ThemedProgressPlugin } = require('themed-progress-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const _modeflag = mode === 'production';
  const envConfig = require(`./config/webpack.${mode}.js`);

  const baseConfig = {
    entry: {
      main: resolve('src/index.tsx'),
    },
    output: {
      path: resolve(process.cwd(), 'dist'),
      clean: true,
    },
    devServer: {
      static: './dist',
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'swc-loader',
          },
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
      ]
    },
    resolve: {
      alias: {
        '@': resolve('src/'),
        '@components': resolve('src/components'),
        '@hooks': resolve('src/hooks'),
        '@pages': resolve('src/pages'),
        '@layouts': resolve('src/layouts'),
        '@assets': resolve('src/assets'),
        '@states': resolve('src/states'),
        '@service': resolve('src/service'),
        '@utils': resolve('src/utils'),
        '@lib': resolve('src/lib'),
        '@constants': resolve('src/constants'),
        '@connections': resolve('src/connections'),
        '@abis': resolve('src/abis'),
        '@types': resolve('src/types'),
      },
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.css'],
      fallback: {
        // stream: require.resolve('stream-browserify'),
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: _modeflag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
        chunkFilename: _modeflag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
        ignoreOrder: false,
      }),
      new ThemedProgressPlugin()
    ],
  };

  return merge.default(baseConfig, envConfig);
}