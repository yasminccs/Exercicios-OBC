const path = require('path')

module.exports = {
    entry: { 
        main: "./src/index.js",
        hello: "./src/hello.js"
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.min.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}


   