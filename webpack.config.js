const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./assets/js/src/app.js'],
    output: {
        path: path.resolve(__dirname, 'assets/js/bin'),
        filename: 'app.bundle.js'
    },
    mode: 'production'
}