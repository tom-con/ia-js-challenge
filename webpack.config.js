const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./client/assets/js/src/app.js'],
    output: {
        path: path.resolve(__dirname, 'client/assets/js/bin'),
        filename: 'app.bundle.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    mode: 'production'
}