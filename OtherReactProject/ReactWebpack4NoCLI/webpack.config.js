const path = require('path');
//create index.html for us
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        //compiled stuff goes here
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            //Look for all .js files unless they live in node_modules
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }, plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}