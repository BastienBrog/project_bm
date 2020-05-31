const path = require('path');
module.exports = {
 entry: './src/index.js',
 output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, 'dist'),
 },
};

module: {
 rules: [
 {
 test: /\.css$/,
 use: [MiniCssExtractPlugin.loader, 'css-loader'],
 }
 ],
};

plugins: [
 new HtmlWebpackPlugin({
 template: './src/index.html',
 inject: true,
 filename: 'index.html'
 }),
 new MiniCssExtractPlugin(),
 new CleanWebpackPlugin(),

];

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');