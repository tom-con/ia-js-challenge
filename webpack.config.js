const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./src/app.js'],
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.bundle.js'
    }
}