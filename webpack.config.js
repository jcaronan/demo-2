var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.css/, loader: "style-loader!css-loader"},
          { test: /\.jsx?$/, loader: 'babel-loader',  include: path.join(__dirname, 'src', 'scripts')},
          {test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,loaders: ['file-loader']}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery',
        }),
    ]
};