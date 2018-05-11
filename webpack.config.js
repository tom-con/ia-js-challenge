const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./assets/js/src/app.js'],
    output: {
        path: path.resolve(__dirname, 'assets/js/bin'),
        filename: 'app.bundle.js'
    },
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