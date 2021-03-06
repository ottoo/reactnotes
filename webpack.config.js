const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
const HotReloadPlugin = new webpack.HotModuleReplacementPlugin()
const DefinePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"'
});
const ProvidePlugin = new webpack.ProvidePlugin({
    '_': 'lodash',
    $: 'jquery',
    jQuery: 'jquery'
});

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './app/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
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
    plugins: [DefinePlugin, HotReloadPlugin,
        HTMLWebpackPluginConfig, ProvidePlugin],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    }
};
