const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        index: './src/index.js'
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].min.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
}
        }],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}