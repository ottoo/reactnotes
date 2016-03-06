const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
const HotModuleReplaceMentPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app'
    },
    plugins: [HTMLWebpackPluginConfig, HotModuleReplaceMentPlugin],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'] 
    },
    devServer: {
        contentBase: __dirname + '/app',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
};