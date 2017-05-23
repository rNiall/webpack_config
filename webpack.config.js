const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
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
                use: ExtractTextWebpackPlugin.extract({ // call our plugin with extract method
                    use: ['css-loader', 'sass-loader'], // use this loaders
                    fallback: 'style-loader' // fallback for any CSS not extracted
                }) // end extract
            }
        ] // end rules
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css') // call the ExtractTextWebpackPlugin constructor and name our css file
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
        historyApiFallback: true, // fallback to /index.html for SPA.
        inline: true, // inline mode (set to false to disable including client scripts (like livereload)
        open: true // open default browser while launching
    },
    devtool: 'eval-source-map' // enable devtool for better debugging experience
};

module.exports = config;