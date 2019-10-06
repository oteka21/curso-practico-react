const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinicssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        // hot: true,
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.s*css$/,
                use: [
                    {
                        loader: MinicssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MinicssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
}