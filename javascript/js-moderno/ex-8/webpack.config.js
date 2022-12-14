const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
     ]
}


   