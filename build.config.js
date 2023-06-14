const isProd = process.env.NODE_ENV === 'production'

const { resolve } = require('path')

const config = {
    devtool: isProd ? false : '#cheap-module-source-map',

    entry: {
        app: resolve(__dirname, '..', 'src','js', 'main.js'),
    },

    output: {
        path: resolve(__dirname, '..', 'dist'),

        // In our case we serve assets directly from root
        publicPath: '/',

        // We add hash to filename to avoid caching issues
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

              // Dependencies do not require transpilation
              exclude: /node_modules/
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
