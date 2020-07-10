var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: {
        app: "./src/App.js"
    },
    output: {
        filename: "build/bundle.js",
        sourceMapFilename: "build/bundle.map"
    },
    devtool: '#source-map',

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}

// var path = require('path');
// var webpack = require('webpack');
// module.exports = {
//     entry: './js/app.js',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'app.bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 }
//             }
//         ]
//     },
//     stats: {
//         colors: true
//     },
//     devtool: 'source-map'
// };
