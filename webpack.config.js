const path = require('path');

let filename = '';

console.log(process.argv);

if (process.argv.indexOf('-p') >= 0) filename = '[name].min.js';
else filename = '[name].js';

module.exports = {
    entry: {
        ctxsvg: './src/index.ts'
    },

    module: {
        rules: [
            {
                test: /\.ts?$/,

                use: 'ts-loader',

                exclude: /node_modules/
            },

            {
                test: /\.scss$/,

                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },
                    {
                        loader: 'sass-loader' // compiles Sass to CSS
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        filename: filename,
        path: path.resolve(__dirname, 'lib'),
        library: 'ctxsvg',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    watch: true
};
