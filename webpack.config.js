var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: _dirname,
        publicPath: '/',
        filename: "public/bundle.js"
    },

    module: {
        loaders: [{
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader?name=/assets/img/[name].[ext]'
        }, {
            test: /\.jsx?$/,
            include: [/src/, '/src/validations/'],
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015"]
            }
        }],
    },
    resolve: {
        extensions: [".jsx", ".json", ".js"]
    },
    node: {
        net: 'empty',
        dns: 'empty'
    },
    devtool: "eval-source-map"
};