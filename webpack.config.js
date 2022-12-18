const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.handlebars$/, loader: 'handlebars-loader' },
            { test: /\.jpg$/, type: 'asset/resource' },
            { test: /\.svg$/, type: 'asset/resource' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './backend/src/index.html'
        })
    ],
    devServer: {
        proxy: {
            '/api': 'http://127.0.0.1:3000',
        },
        historyApiFallback: true
    }
};
