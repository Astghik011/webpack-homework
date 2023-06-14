const isProd = process.env.NODE_ENV === 'production'

const { resolve } = require('path')

const config = {

    entry: {
        app: resolve(__dirname, '..', 'src','js', 'main.js'),
    },

    output: {
        path: resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
    },

    resolve: {
        extensions: ['*', '.js'],
        modules: [
            resolve(__dirname, '..', 'node_modules'),
        ],
    },

    module: {
        rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
            },
        ],
    },

    plugins: [],
}

if (!isProd) {
    config.devServer = {
        contentBase: resolve(__dirname, '..', 'static'),
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
    }
}

module.exports = config
