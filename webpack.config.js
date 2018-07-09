const path = require('path');

let filename = '';

console.log(process.argv);

if (process.argv.indexOf('-p') >= 0) filename = '[name].min.js';
else filename = '[name].js';

if (process.argv.indexOf('-app') >= 0)
    (output = {
        filename: filename,
        path: path.resolve(__dirname, 'app')
    }),
        (entry = {
            app: './src/app.ts'
        });
else
    (output = {
        filename: filename,
        path: path.resolve(__dirname, 'lib'),
        library: 'ctxsvg',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }),
        (entry = { ctxsvg: './src/index.ts' });

module.exports = {
    entry: entry,

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

    output: output,

    watch: true
};
