const webpack = require('webpack'); // webpack itself
const path = require('path'); // nodejs dependency when dealing with paths
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // require webpack plugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // require webpack plugin
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin'); // require webpack plugin

let config = { // config object

    entry: './src/index.js', // entry file
    output: { // output
        path: path.resolve(__dirname, './public'), // ouput path
        filename: 'output.js' // output filename
    },
    module: {
        rules: [ // loader rules
            {
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/, // exclude the node_modules directory
                loader: 'babel-loader' // use this (babel-core) loader
            },
            {
                test: /\.scss$/, // files ending with .scss
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })),
            }
        ] // end rules
    },
    plugins: [ // webpack plugins
        new ExtractTextWebpackPlugin('styles.css'), // call the ExtractTextWebpackPlugin constructor and name our css file
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from.
        historyApiFallback: true, // fallback to /index.html for Single Page Applications.
        inline: true, // inline mode (set to false to disable including client scripts (like livereload)
        open: true // open default browser while launching
    },
    devtool: 'eval-source-map', // enable devtool for better debugging experience
};

module.exports = config;

if (process.env.NODE_ENV === 'production') { // if we're in production mode, here's what happens next
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(), // call the uglify plugin
        new OptimizeCSSAssets() // call the css optimizer (minfication)
    );
}
