const webpack = require("webpack");
const path = require("path");
module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resilve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loeader']
            }
        ]
    }
}