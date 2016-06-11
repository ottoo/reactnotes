const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
const HotModuleReplaceMentPlugin = new webpack.HotModuleReplacementPlugin();
const ProvidePlugin = new webpack.ProvidePlugin({
    '_': 'lodash',
    $: 'jquery',
    jQuery: 'jquery'
});
const CommonChunksPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
});

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: './app/index.js',
        vendor: './app/vendor.js'
    },
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
        filename: '[name].[hash].js',
        chunkFilename: '[chunkhash].js',
        path: __dirname + '/app',
        publicPath: '/'
    },
    plugins: [HTMLWebpackPluginConfig, HotModuleReplaceMentPlugin, ProvidePlugin],
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
