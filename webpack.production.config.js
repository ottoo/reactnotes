const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
const ProvidePlugin = new webpack.ProvidePlugin({
    _: 'lodash',
    $: 'jquery',
    jQuery: 'jquery'
});
const DedupePlugin = new webpack.optimize.DedupePlugin();
const DefinePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
});

module.exports = {
    devtool: 'source-map',
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=res/[name].[ext]'
        }]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        hash: true
    },
    plugins: [HTMLWebpackPluginConfig, UglifyJSPluginConfig, DedupePlugin,
        DefinePlugin, ProvidePlugin],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    }
};
