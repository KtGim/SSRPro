const path = require('path');

process.env.BABEL_ENV = 'development';

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/react', ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]]
                }
            },
            {
                test: /\.css?$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                    }
                }]
            }
        ]
    }
}