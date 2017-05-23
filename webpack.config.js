
const webpack = require('webpack');

let config = {
    entry: './index.js',
    output: {
        filename: 'output.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // file endings with .js
                exclude: /node_modules/, // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },
            {
                test: /\.scss$/, // files endings with .scss
                loader: ['style-loader', 'css-loader', 'sass-loader'] // use this loader
            }
        ]
    }
};

module.exports = config;