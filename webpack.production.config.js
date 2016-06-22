const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
const ExtractText = new ExtractTextPlugin('styles.css');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './app/index.js',
        vendor: ['jquery', 'lodash']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=res/[name].[ext]'
        }]
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        hash: true
    },
    plugins: [ExtractText, HTMLWebpackPluginConfig, UglifyJSPluginConfig, DedupePlugin,
        DefinePlugin, ProvidePlugin],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    }
};
