const {
            js,
            ts,
            reactJsxTsx,
            ignoreStyle,
            imgs,
            svgToUrl,
            fonts,
            html
        } = require('./loaders');
const externals = require('./externals');
const output = require('./output');
const entry = require('./entry');

module.exports = {
    mode: 'development',
    target: 'node',
    node: {
        __dirname: false
    },
    externals: externals,
    entry: entry.test,
    module: {
        rules: [
            js,
            ts,
            reactJsxTsx,
            ignoreStyle,
            imgs,
            svgToUrl,
            fonts,
            html
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.ts','.tsx','.css','.scss','.png','.svg','.jpg'],
        alias:{
            '@': path.resolve(__dirname, 'src'),
            '@utilities': path.resolve(__dirname, 'src/utilities'),
        }
    },
    output: output("../test"),
}