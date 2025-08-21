const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const port = 3003;

module.exports = {
  devServer: {
    //单页的spa应用 使用起来
    historyApiFallback: true,
    hot: true,
    port,
  },
  output: {
    publicPath: '/',
    //如果是通过loader 编译的 放到scripts文件夹里 filename
    filename: 'scripts/[name].bundle.js',
    //如果是通过'asset/resource' 编译的
    assetModuleFilename: 'images/[name].[ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index-dev.html'),
      filename: 'index.html',
      favicon: resolve(__dirname, '../public/favicon.ico'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:' + port],
        notes: ['💊 构建信息请及时关注窗口右上角'],
      },
      // new WebpackBuildNotifierPlugin({
      //   title: '💿 Solv Dvelopment Notification',
      //   logo,
      //   suppressSuccess: true,
      // }),
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        console.log(error);
        notifier.notify({
          title: '👒 Webpack Build Error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: join(__dirname, 'icon.png'),
        });
      },
      clearConsole: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',        // 🔧 生成静态HTML文件模式
      openAnalyzer: false,           // 🚫 不自动打开浏览器
      reportFilename: 'report.html', // 📄 报告文件名
      generateStatsFile: true,       // 📊 生成统计JSON文件
      statsFilename: 'stats.json',   // 📝 统计文件名
      defaultSizes: 'parsed',        // 📏 显示处理后的文件大小
      excludeAssets: /\.map$/,       // 🚫 排除.map文件
    }),
  ],
}