const path = require('path');
const merge =  require( 'webpack-merge' );
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist',
        historyApiFallback: true,
        noInfo: true
    }
});