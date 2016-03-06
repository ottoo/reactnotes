const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
  hash: true
});
const UglifyJSPluginConfig = new webpack.optimize.UglifyJsPlugin({
  compressor: {
    warnings: false
  }
});
const DedupePlugin = new webpack.optimize.DedupePlugin();

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
        path: __dirname + '/dist',
        hash: true
    },
    plugins: [HTMLWebpackPluginConfig, UglifyJSPluginConfig, DedupePlugin],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'] 
    }
};